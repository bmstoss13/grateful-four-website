import { FormData } from "@/utils/Types";
import FormLabel from "./FormLabel";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import React, { ChangeEvent, useState } from "react";
import PageTitle from "../PageHeader/PageTitle";
import FormTextArea from "./FormTextArea";
import FormCheckbox from "./FormCheckbox";

export default function ContactForm(){

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        isSubscribed: false,
    })
    const [canSubmit, setCanSubmit] = useState<Boolean>(false)

    //Submit data to AWS DynamoDB - important to keep track of people signed up for newsletter. TODO: determine how to send messages, if any, to email
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault(); //prevent default browser form submission
        try{
            await axios.postForm('/placeholder', formData)
        } catch (err){
            console.error("Client: error while submitting form data: ", err)
        }
    }

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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;

        const value = target.type === 'checkbox'
            ? (target as HTMLInputElement).checked
            : target.value;
        const name = target.name;

        handleChangeFormField(name, value);
    }

    //Clear the form by resetting to initial state
    const handleClearForm = () => {
        try{
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                isSubscribed: false,
            });
            setCanSubmit(false);           
        } catch (err) {
            console.error("Client: error while clearing form data: ", err);
        }
    }

    const handleCanSubmit = () => {
        try{
        } catch (err) {
            console.error("Client: error while toggling whether user can submit or not: ", err);
        }
    }

    return(
        <form 
            id="contact-form" 
            className="flex flex-col w-[800px] max-w-[98vw]
            justify-center align-center gap-[12px]
            bg-gray-100 m-auto mt-[80px] p-[20px] rounded-lg shadow-md"
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
                />
                <FormLabel 
                    id="contact-form-last-name" 
                    type="text" 
                    title="Last Name" 
                    name="lastName"
                    isRequired={true}
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </span>
            <FormLabel 
                id="contact-form-email" 
                type="text" 
                title="Email" 
                name="email"
                isRequired={true}
                value={formData.email}
                placeholder="e.g. youremail@email.com"
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
                isRequired={false}
                isDraggable={false}
                isResizable={false}
                value={formData.message}
                onChange={handleInputChange}

            />
            <div className="ml-auto">
                <SubmitButton />  
            </div>
  
        </form>
    )
}