'use client'

import ContactForm from "@/components/Contact/ContactForm"
import PageFooter from "@/components/Footer/PageFooter"

export default function ContactPage(){
    return(
        <div className="flex flex-col w-full min-h-[100vh] align-center justify-center">
            <ContactForm />
            <PageFooter />
        </div>
    )
}