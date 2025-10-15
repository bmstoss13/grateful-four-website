import PageSubHeader from "./PageSubHeader";
import PageTitle from "./PageTitle";

interface PageHeaderProps{
    title: string;
    subHeaderText?: string;
    
}

export default function PageHeader({
    title,
    subHeaderText,
}:PageHeaderProps){
    return(
        <div className="flex flex-col min-h-[100vh] w-full items-center justify-center">
            <PageTitle title={title} />
            {subHeaderText && (
                <PageSubHeader text={subHeaderText}/>
            )}
        </div>
    )
}