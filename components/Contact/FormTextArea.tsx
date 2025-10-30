import { ChangeEvent } from "react";

interface FormTextAreaProps{
    id: string;
    title: string;
    name: string;
    isRequired: boolean;
    isDraggable: boolean;
    isResizable: boolean;
    value?: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;    
}

export default function FormTextArea({
    id,
    title,
    name,
    isRequired,
    isDraggable,
    isResizable,
    value,
    placeholder,
    onChange,
}:FormTextAreaProps){
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
            <textarea
                id={id} 
                name={name} 
                value={value}
                onChange={onChange} 
                className={`h-[180px] p-[8px] ${!isResizable ? 'resize-none' : ''} border-[1px] border-solid border-gray-400`}
                draggable={isDraggable}
                required={isRequired}
            />
        </div>
    )
}