import { FormData } from "@/utils/Types";

interface SubmitButtonProps{
    isLoading: boolean;
}
export default function SubmitButton({
    isLoading,
}:SubmitButtonProps){
    return(
        <button
            type="submit"
            disabled={isLoading}
            className={`text-[18px] text-white font-bold p-[12px] bg-indigo-600 
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-lg'} 
            focus:translate-y-0.5 rounded-xl transition-all duration-[0.1s] ease`}
        >
            Submit
        </button>
    )
}