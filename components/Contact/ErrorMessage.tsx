interface ErrorMessageProps{
    error: string;
}

export default function ErrorMessage ({error}: ErrorMessageProps){
    if (!error) return null;

    return(
        <p
            className={`mt-[4px] p-[8px] border-[1px] border-red-500
                text-red-500 font-bold rounded-lg bg-red-100
                animate-shake shadow-md shadow-red-200`}
        >
            {error}
        </p>
    )
}