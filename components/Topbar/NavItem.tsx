import Link from "next/link";
import { usePathname } from "next/navigation";
import { navTypes } from "@/utils/Types";

interface NavItemProps{
    title: string;
    linkTo: string;
    name: navTypes | null;
    accentColor?: string;
}

const activeColorClasses: {[key: string]: string} = {
    'amber-400': 'text-amber-400', 
    'purple-400': 'text-purple-400',
    'green-400': 'text-green-400',
    'yellow-200': 'text-yellow-200'
}

const hoverColorClasses: {[key: string]: string} = {
    'amber-400': 'hover:text-amber-300',
    'purple-400': 'hover:text-purple-300',
    'green-400': 'hover:text-green-300',
    'yellow-200': 'hover:text-yellow-100'
}

const activeBorderColorClasses: {[key: string]: string} = {
    'amber-400': 'border-amber-400', 
    'purple-400': 'border-purple-400',
    'green-400': 'border-green-400',
    'yellow-200': 'border-yellow-200'
}

export default function NavItem({
    title,
    linkTo,
    accentColor
}:NavItemProps){

    const currentPath = usePathname();
    const isActive = currentPath === linkTo;

    const activeClass = accentColor ? activeColorClasses[accentColor] : '';
    const hoverBaseClass = accentColor ? hoverColorClasses[accentColor] : '';
    const activeBorderClass = accentColor ? activeBorderColorClasses[accentColor] : '';

    const linkClasses = [
        "relative",
        "text-[18px]",
        "text-[var(--topBarText)]",
        "transition-colors", 
        isActive ? activeClass : '',
        hoverBaseClass,
        'ease duration-[0.1s]' 
    ].filter(Boolean).join(" ");

    const underlineClasses = [
        "absolute",
        "bottom-0", 
        "left-1/2",
        "transform",
        "-translate-x-1/2",
        "h-[2px]", 
        "transition-all",
        "duration-300",
        activeBorderClass,
        isActive ? "w-full" : "w-0" 
    ].filter(Boolean).join(" ");
    
    return(
        <Link 
            href={linkTo} 
            className={linkClasses}
        >
            {title}
            <div 
                className={`border-b-2 border-solid ${underlineClasses}`}
            />
        </Link>
    )
}