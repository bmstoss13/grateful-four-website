interface MemberTextProps {
    text: string;
}

export default function MemberText({
    text,
}: MemberTextProps){
    return(
        <p>
            {text}
        </p>
    )
}