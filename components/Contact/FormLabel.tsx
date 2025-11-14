import { ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

interface FormLabelProps{
    id: string;
    type: string;
    title: string;
    name: string;
    isRequired: boolean;
    value: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
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
    error,
}:FormLabelProps){
    return(
        <div className="flex flex-col flex-shrink w-full text-[18px]">
            <label htmlFor={id}>
                <span className="flex gap-[2px]">
                    <h3 className="font-bold">
                        {title}
                    </h3>
                    {isRequired && (
                        <p className="text-red-500">
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
                className={`p-[8px] border-[1px] border-solid  outline-none rounded-lg transition-all ease duration-[0.1s]
                    ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-400 focus:border-indigo-500 focus:ring-indigo-200'} 
                    focus:ring-2`}
                placeholder={placeholder}
                required={isRequired}
            />
            {error && (
                <ErrorMessage 
                    error={error}
                />
            )}
        </div>       
    )
}