import AboutUsText from "./AboutUsText";
import AboutUsTitle from "./AboutUsTitle";

export default function AboutUsContainer(){
    return(
        <div
            className={`flex flex-col w-full max-w-[1200px] m-12 p-[16px] bg-gray-100 rounded-xl shadow-lg`}
        >
            <AboutUsTitle/>
            <AboutUsText/>
        </div>
    )
}