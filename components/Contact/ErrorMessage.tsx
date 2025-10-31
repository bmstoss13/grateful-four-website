interface ErrorMessageProps{
    error: string;
}

export default function ErrorMessage ({error}: ErrorMessageProps){
    return(
        <p
            className={`m-[10px]`}
        >
            {error}
        </p>
    )
}