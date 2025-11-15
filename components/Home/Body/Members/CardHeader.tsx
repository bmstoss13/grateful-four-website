import { PositionType } from "@/utils/Types";

interface CardHeaderProps{
    name: string;
    position: PositionType;
}

export default function CardHeader({
    name,
    position
}:CardHeaderProps){
    return(
        <span
            className="flex gap-0.5"
        >
            <h1
                className="font-bold"
            >
                {name},
            </h1>
            <p
                className="italic"
            >
                {position}
            </p>
        </span>
    )
}