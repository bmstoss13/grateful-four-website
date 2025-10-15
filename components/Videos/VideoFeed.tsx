import { Video } from "@/utils/Types"

interface VideoFeedProps{
    videoList: Video[];
}

export default function VideoFeed({
    videoList
}:VideoFeedProps){
    return(
        <div>
            {videoList.map((video) => {
                return(
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}