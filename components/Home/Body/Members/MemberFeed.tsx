import { Members } from "@/utils/MemberList/Members";
import MemberCard from "./MemberCard";



export default function MemberFeed(){
    return(
        <div
            className={`flex flex-col gap-4 p-14`}
        >
            {Members.map(member => {
                return( 
                    <MemberCard
                        key={member.position}
                        member={member}
                        picturePosition="Left"
                    />
                )
            })}
        </div>
    )
}