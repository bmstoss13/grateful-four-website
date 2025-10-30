import { Video } from "@/utils/Types"
import VideoItem from "./VideoItem";

interface VideoFeedProps{
    videoList: Video[];
}

export default function VideoFeed({
    videoList
}:VideoFeedProps){
    return(
        <div className={`flex flex-col w-full gap-[12px]`}>
            {videoList.map((video) => {
                return(
                    <VideoItem
                        key={video.id}
                        video={video}
                    />
                )
            })}
        </div>
    )
}