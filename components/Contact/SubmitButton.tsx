import { FormData } from "@/utils/Types";


export default function SubmitButton(){
    return(
        <button
            type="submit"
            className={`text-[18px] text-white font-bold p-[12px] bg-indigo-600 
            cursor-pointer rounded-lg hover:-translate-y-0.5 hover:bg-indigo-500 
            transition-all duration-[0.1s] ease`}
        >
            Submit
        </button>
    )
}