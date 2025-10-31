import Image from "next/image";

interface MediaItemProps{
    linkTo: string;
    icon: string;
    altText: string;
    width: number;
    height: number;
}

export default function MediaItem({
    linkTo,
    icon,
    altText,
    width,
    height
}: MediaItemProps){
    return(
        <a 
            href={linkTo}
            target="_blank"
        >
            <Image 
                src={icon}
                alt={altText}
                width={width}
                height={height}
                className="border-2 border-white border-solid p-[4px] rounded-full"
            />
            
        </a>
    )
}