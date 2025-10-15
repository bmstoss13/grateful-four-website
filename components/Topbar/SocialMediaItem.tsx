import Image from "next/image";

interface SocialMediaItemProps{
    linkTo: string;
    icon: string;
    altText: string;
    width: number;
    height: number;
}

export default function SocialMediaItem({
    linkTo,
    icon,
    altText,
    width,
    height
}: SocialMediaItemProps){
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
            />
            
        </a>
    )
}