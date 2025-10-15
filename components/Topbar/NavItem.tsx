import Link from "next/link";

interface NavItemProps{
    title: string;
    linkTo: string;
}

export default function NavItem({
    title,
    linkTo
}:NavItemProps){
    return(
        <Link href={linkTo} className={`text-[var(--topBarText)] text-[16px]`}>
            {title}
        </Link>
    )
}