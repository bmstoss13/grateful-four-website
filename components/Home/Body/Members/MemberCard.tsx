import { Member, PicturePositionType } from "@/utils/Types";
import CardHeader from "./CardHeader";
import Portrait from "./Portrait";

interface MemberCardProps{
    member: Member;
    picturePosition: PicturePositionType;
}

const activeColorClasses: {[key: string]: string} = {
    'Gold': 'bg-amber-400', 
    'Purple': 'bg-purple-400',
    'Green': 'bg-green-400',
    'Yellow': 'bg-yellow-200'
}

export default function MemberCard({
    member,
    picturePosition,
}:MemberCardProps){
    
    const cardBackground = activeColorClasses[member.color] || 'bg-gray-400'
    return(
        <div
            className={`
                flex flex-col p-2 ${cardBackground} rounded-xl shadow-lg 
                md:flex 
            `}
        >
            <Portrait 
                image={member.imageUrl}
                memberName={member.name}
                position={member.position}
            />
            <div
                className={`flex flex-col`}
            >
                <CardHeader
                    name={member.name}
                    position={member.position}
                />
            </div>
        </div>
    )
}