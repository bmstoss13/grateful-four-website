interface PageSubHeaderProps{
    text: string;
    textColor: string;
}

export default function PageSubHeader({
    text,
    textColor
}:PageSubHeaderProps) {
    return(
        <h3 className={`lg:text-3xl md:text-2xl text-xl text-${textColor} [text-shadow:_2px_4px_8px_rgb(0_0_0_/_80%)]`}>
            {text}
        </h3>
    )
}