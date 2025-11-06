interface ContactUsTitleProps{
    title: string;
}

export default function ContactUsTitle({
    title
}:ContactUsTitleProps){
    return(
        <h1 className="text-4xl font-semibold text-center">
            {title}
        </h1>
    )
}