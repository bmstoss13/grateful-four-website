'use client'

import { FormData, FormErrors } from "@/utils/Types";
import FormLabel from "./FormLabel";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import React, { ChangeEvent, useState } from "react";
import PageTitle from "../PageHeader/PageTitle";
import FormTextArea from "./FormTextArea";
import FormCheckbox from "./FormCheckbox";
import ClearButton from "./ClearButton";

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

    // Submit data to AWS DynamoDB - important to keep track of people signed up for newsletter. TODO: determine how to send messages, if any, to email
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault(); //prevent default browser form submission

        const validationErrors = validateContactForm()
        if(Object.keys(validationErrors).length > 0){
            setFormErrors(validationErrors)
            return;
        }

        handleClearErrors();
        try{

            await axios.postForm('/placeholder', formData)

            handleClearForm();
        } catch (err){
            console.error("Client: error while submitting form data: ", err)
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
        if (!formData.lastName) {
            errors.lastName = "Last name is required.";
        }
        if (!formData.email) {
            errors.email = "Email is required.";
        }

        else if (!validateEmail(email)){
            errors.email = "Invalid email format.";
        }

        if (!formData.message) {
            errors.message = "Message is required.";
        }

        return errors
    }

    // Use regex to validate general email format
    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    }

    return(
        <form 
            id="contact-form" 
            className="flex flex-col w-[800px] max-w-[98vw]
            justify-center align-center gap-[12px]
            bg-gray-100 m-auto mt-[80px] p-[20px] rounded-lg shadow-md"
            onSubmit={handleSubmit}
        >
            <PageTitle title="Contact Us"/>
            <span className="flex gap-[10px]">
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
                    error={formErrors.firstName}
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
            />
            <FormCheckbox 
                id="contact-form-subscribe"
                name="isSubscribed"
                caption="Keep up to date with latest news?"
            />
            <FormTextArea 
                id="contact-form-message"
                title="Message"
                name="message"
                isRequired={true}
                isDraggable={false}
                isResizable={false}
                value={formData.message}
                onChange={handleInputChange}
            />
            <div className="flex ml-auto gap-[12px]">
                <ClearButton 
                    onClear={handleClearForm}
                /> 
                <SubmitButton/>
 
            </div>
  
        </form>
    )
}