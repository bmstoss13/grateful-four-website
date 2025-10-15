interface PageSubHeaderProps{
    text: string;
}

export default function PageSubHeader({
    text
}:PageSubHeaderProps) {
    return(
        <p className={`text-[16px] text-gray-700`}>
            {text}
        </p>
    )
}