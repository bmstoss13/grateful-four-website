import FooterHeader from "./FooterHeader";
import MediaList from "./MediaList";

export default function PageFooter(){
    return(
        <main 
            className={`flex flex-col w-full h-[240px] p-[16px]
            bg-[var(--primary)] text-white`}        
        >
            <FooterHeader />
            <MediaList />
        </main>
    )
}