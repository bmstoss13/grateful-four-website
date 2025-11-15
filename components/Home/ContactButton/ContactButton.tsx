import Link from "next/link";

// home page button to take user to the contact page
export default function ContactButton(){
    return(
        <Link
            href='/contact'
        >
            <button
                className={`mt-6 p-[14px] lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white border-[2px] border-solid
                    rounded-full cursor-pointer font-semibold hover:-translate-y-[2px] hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]
                    hover:bg-[rgba(255,255,255,0.1)] transition-all ease duration-[0.2s] active:shadow-none active:translate-y-[1px]
                    active:bg-[rgba(255,255,255,0.15)]`}
            >
                Contact Us!
            </button>        
        </Link>

    )
}