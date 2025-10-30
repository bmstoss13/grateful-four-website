interface FormCheckboxProps{
    id: string;
    name: string;
    caption: string;
}

export default function FormCheckbox({
    id,
    name,
    caption,
}:FormCheckboxProps){
    return(
        <label 
        htmlFor={id}   
        className="flex mr-auto gap-[4px] cursor-pointer">
            <input 
                id={id} 
                type="checkbox" 
                name={name}
                className="cursor-pointer"
            />
            <p 

                className="text-[14px] text-gray-600"
            >
                {caption}
            </p>
        </label>      
    )
}