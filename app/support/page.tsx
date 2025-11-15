import PageFooter from "@/components/Footer/PageFooter";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function SupportPage(){
    return(
        <div
            className="w-full"
        >
            <PageHeader 
                title="Support Us"
                subHeaderText="Your donations will be used solely for group expenses, such as sheet music, travel, and venue costs."
                backgroundImage="/supportBackground.png"
                isSupport={true}
            />
            <PageFooter/>
        </div>
    )
}