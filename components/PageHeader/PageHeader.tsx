import PageSubHeader from "./PageSubHeader";
import PageTitle from "./PageTitle";

interface PageHeaderProps{
    title: string;
    subHeaderText?: string;
    backgroundImage?: string;
    
}

export default function PageHeader({
    title,
    subHeaderText,
    backgroundImage,
}: PageHeaderProps) {
    const backgroundStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})` }
        : {};

    const textColor = backgroundImage ? 'white' : 'black'
    
    return(
        <div className="relative flex flex-col min-h-[95vh] w-full items-center justify-center overflow-hidden">
            {/* Blurred background */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-100 blur-xs scale-110 -z-10"
                style={backgroundStyle}
            />
            {backgroundImage && (
                <div className="absolute inset-0 bg-black/40 -z-10" />
            )}
            
            
            {/* Content */}
                <PageTitle 
                    title={title} 
                    textColor={textColor}
                />
                {subHeaderText && (
                    <PageSubHeader 
                        text={subHeaderText}
                        textColor={textColor}
                    />
                )}            

        </div>
    )
}