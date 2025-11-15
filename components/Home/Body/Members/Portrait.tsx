import { PositionType } from "@/utils/Types";
import Image from "next/image";

interface PortraitProps{
    image: string;
    memberName: string;
    position: PositionType;
    border: string;
}
export default function Portrait({
    image,
    memberName,
    position,
    border
}:PortraitProps){
    return(
        <Image
            src={image}
            alt={`Photo of ${memberName}, ${position} singer.`}
            width={240}
            height={240}
            className={`rounded-lg m-auto border-solid border-[2px] ${border} 
                md:m-0`}
        />
    )
}