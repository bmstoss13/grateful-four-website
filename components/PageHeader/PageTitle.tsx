interface PageTitleProps{
    title: string;
}

export default function PageTitle({
    title
}:PageTitleProps){
    return(
        <h1 className="text-4xl font-bold">
            {title}
        </h1>
    )
}