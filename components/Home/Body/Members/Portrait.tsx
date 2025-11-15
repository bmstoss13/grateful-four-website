import { PositionType } from "@/utils/Types";
import Image from "next/image";

interface PortraitProps{
    image: string;
    memberName: string;
    position: PositionType;
}
export default function Portrait({
    image,
    memberName,
    position
}:PortraitProps){
    return(
        <Image
            src={image}
            alt={`Photo of ${memberName}, ${position} singer.`}
            width={200}
            height={200}
        />
    )
}