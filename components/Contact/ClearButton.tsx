interface ClearButtonProps{
    onClear: () => void;
}

export default function ClearButton({
    onClear,
}:ClearButtonProps){
    return(
        <button
            type="reset"
            onClick={onClear}
            className={`text-[18px] text-white font-bold p-[12px] bg-gray-500 
            cursor-pointer rounded-xl hover:-translate-y-0.5 hover:bg-gray-400 
            hover:shadow-lg active:translate-y-0.5
            transition-all duration-[0.1s] ease`}
        >
            Clear
        </button>
    )
}