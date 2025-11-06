interface PageTitleProps{
    title: string;
    textColor?: string;
}

export default function PageTitle({
    title,
    textColor
}:PageTitleProps){
    return(
        <h1 className={`lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-semibold text-center text-${textColor} [text-shadow:_2px_4px_8px_rgb(0_0_0_/_80%)]`}>
            {title}
        </h1>
    )
}