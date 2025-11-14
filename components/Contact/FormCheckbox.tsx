import { ChangeEvent } from "react";

interface FormCheckboxProps{
    id: string;
    name: string;
    caption: string;
    value: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormCheckbox({
    id,
    name,
    caption,
    value,
    onChange
}:FormCheckboxProps){
    return(
        <label 
        htmlFor={id}   
        className="flex mr-auto gap-[4px] cursor-pointer">
            <input 
                id={id} 
                type="checkbox" 
                name={name}
                checked={value}
                className="cursor-pointer"
                onChange={onChange}
            />
            <p 

                className="text-[14px] text-gray-600"
            >
                {caption}
            </p>
        </label>      
    )
}