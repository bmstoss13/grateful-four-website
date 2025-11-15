import { Member, PicturePositionType } from "@/utils/Types";
import CardHeader from "./CardHeader";
import Portrait from "./Portrait";
import MemberText from "./MemberText";

interface MemberCardProps{
    member: Member;
    picturePosition: PicturePositionType;
}

const activeColorClasses: {[key: string]: string} = {
    'Gold': 'bg-amber-300', 
    'Purple': 'bg-purple-300',
    'Green': 'bg-green-300',
    'Yellow': 'bg-yellow-100'
}

const activeBorderColorClasses: {[key: string]: string} = {
    'Gold': 'border-amber-400', 
    'Purple': 'border-purple-400',
    'Green': 'border-green-400',
    'Yellow': 'border-yellow-200'    
}

export default function MemberCard({
    member,
    picturePosition,
}:MemberCardProps){
    
    const cardBackground = activeColorClasses[member.color] || 'bg-gray-400'
    const cardBorder = activeBorderColorClasses[member.color] || 'border-gray-500'
    return(
        <div
            className={`
                flex flex-col w-full max-w-[1000px] p-2 ${cardBackground} border-solid border-[2px] ${cardBorder} rounded-xl shadow-lg gap-2
                ml-auto mr-auto 
                md:flex-row 
            `}
        >
            <Portrait 
                image={member.imageUrl}
                memberName={member.name}
                position={member.position}
                border={cardBorder}
            />
            <div
                className={`flex flex-col`}
            >
                <CardHeader
                    name={member.name}
                    position={member.position}
                />
                <MemberText 
                    text={member.text}
                />
            </div>
        </div>
    )
}