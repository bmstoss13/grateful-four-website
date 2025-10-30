import { ChangeEvent } from "react";

interface FormLabelProps{
    id: string;
    type: string;
    title: string;
    name: string;
    isRequired: boolean;
    value: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormLabel({
    id,
    type,
    title,
    name,
    isRequired,
    value,
    placeholder,
    onChange,
}:FormLabelProps){
    return(
        <div className="flex flex-col w-full text-[18px]">
            <label htmlFor={id}>
                <span className="flex gap-[2px]">
                    <h3 className="font-bold">
                        {title}
                    </h3>
                    {isRequired && (
                        <p className="text-orange-600">
                            *
                        </p>
                    )}
                </span>
            </label>
            <input 
                id={id} 
                name={name} 
                type={type}
                value={value}
                onChange={onChange} 
                className="p-[8px] border-[1px] border-solid border-gray-400"
                placeholder={placeholder}
                required={isRequired}
            />
        </div>       
    )
}