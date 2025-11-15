'use client'

import { FormData, FormErrors } from "@/utils/Types";
import FormLabel from "./FormLabel";
import SubmitButton from "./SubmitButton";
import React, { ChangeEvent, useState, useEffect } from "react";
import FormTextArea from "./FormTextArea";
import FormCheckbox from "./FormCheckbox";
import ClearButton from "./ClearButton";
import ContactUsTitle from "./ContactUsTitle";
import { apiInstance, emailApiInstance } from "@/utils/apiHelper";
import { toast, Toaster } from "react-hot-toast";

export default function ContactForm(){

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        isSubscribed: false,
    })
    const [formErrors, setFormErrors] = useState<FormErrors>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        isSubscribed: '',
    });

    const[isLoading, setIsLoading] = useState<boolean>(false);
    const[apiStatus, setApiStatus] = useState<string|null>(null);

    // Submit data to AWS DynamoDB - important to keep track of people signed up for newsletter. TODO: determine how to send messages, if any, to email
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault(); //prevent default browser form submission

        const validationErrors = validateContactForm()
        if(Object.keys(validationErrors).length > 0){
            setFormErrors(validationErrors)
            return;
        }

        handleClearErrors();
        setIsLoading(true);
        setApiStatus(null);
        try{
            await emailApiInstance.post('/submit-form', formData)
            setApiStatus('success')
            handleClearForm();
        } catch (err){
            setApiStatus('error')
            console.error("Client: error while submitting form data: ", err)
        } finally {
            setIsLoading(false);
        }
    }

    // Set form data state to reflect change in user form data
    const handleChangeFormField = (name: string, value: string | boolean) => {
        try{
            setFormData((prevFormData: FormData) => ({
                ...prevFormData, 
                ...({[name]: value} as Partial<FormData>)
            }))
        } catch (err) {
            console.error("Client: error while updating form field")
        }
    }

    // Get the element of the form the user is changing
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;

        const value = target.type === 'checkbox'
            ? (target as HTMLInputElement).checked
            : target.value;
        const name = target.name;

        handleChangeFormField(name, value);
    }

    // Clear the form by resetting to initial state
    const handleClearForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            isSubscribed: false,
        });
        if(Object.keys(formErrors).length > 0) handleClearErrors(); 
         
    }

    const handleClearErrors = () => {
        setFormErrors({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            isSubscribed: ''
        });      
    }

    // Validate entire form, displaying validation error if there is an occurrence
    const validateContactForm = ():FormErrors => {
        const email = formData.email;

        const errors: FormErrors = {};

        if (!formData.firstName) {
            errors.firstName = "First name is required.";
        }
        else if (!formData.lastName) {
            errors.lastName = "Last name is required.";
        }
        else if (!formData.email) {
            errors.email = "Email is required.";
        }

        else if (!validateEmail(email)){
            errors.email = "Invalid email format.";
        }

        else if (!formData.message && !formData.isSubscribed) {
            errors.message = "A message is required unless you are subscribing.";
        }

        return errors
    }

    // Use regex to validate general email format
    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        if(apiStatus === 'success') {
            toast.success('Message sent successfully!')
        }
        else if(apiStatus === 'error'){
            toast.error('Submission failed. Please try again.')
        }
    }, [apiStatus])

    return(
        <form 
            id="contact-form" 
            className="flex flex-col w-[800px] max-w-[95vw]
            justify-center align-center gap-[12px]
            bg-gray-100 m-auto mt-[100px] mb-[30px] p-[20px] rounded-xl shadow-lg"
            onSubmit={handleSubmit}
            noValidate
        >
            <Toaster position="top-right" />
            <ContactUsTitle title="Contact Us"/>
            <span className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-[10px] justify-center">
                <FormLabel 
                    id="contact-form-first-name" 
                    type="text" 
                    title="First Name" 
                    name="firstName"
                    isRequired={true}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={formErrors.firstName}
                />
                <FormLabel 
                    id="contact-form-last-name" 
                    type="text" 
                    title="Last Name" 
                    name="lastName"
                    isRequired={true}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={formErrors.lastName}
                />
            </span>
            <FormLabel 
                id="contact-form-email" 
                type="text" 
                title="Email" 
                name="email"
                isRequired={true}
                value={formData.email}
                placeholder="e.g. user@email.com"
                onChange={handleInputChange}
                error={formErrors.email}
            />
            <FormCheckbox 
                id="contact-form-subscribe"
                name="isSubscribed"
                caption="Keep up to date with latest news?"
                value={formData.isSubscribed}
                onChange={handleInputChange}
            />
            <FormTextArea 
                id="contact-form-message"
                title="Message"
                name="message"
                isRequired={true}
                isDraggable={false}
                isResizable={false}
                value={formData.message!}
                onChange={handleInputChange}
                error={formErrors.message}
            />
            <div className="flex ml-auto gap-[12px]">
                <ClearButton 
                    onClear={handleClearForm}
                /> 
                <SubmitButton
                    isLoading={isLoading}
                />
 
            </div>
  
        </form>
    )
}