import { navTypes } from "@/utils/Types";
import Link from "next/link";

interface NavItemProps{
    title: string;
    linkTo: string;
    name: navTypes | null;
}

export default function NavItem({
    title,
    linkTo
}:NavItemProps){
    return(
        <Link 
            href={linkTo} 
            className={`text-[var(--topBarText)] text-[18px]`}
        >
            {title}
        </Link>
    )
}