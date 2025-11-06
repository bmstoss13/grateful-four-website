import { Video } from "@/utils/Types"
import VideoItem from "./VideoItem";
import LoadMoreButton from "./LoadMoreButton";

interface VideoFeedProps{
    videoList: Video[];
    nextPageToken: boolean| null;
    isLoading: boolean;
    onLoadMore: () => void;
}

export default function VideoFeed({
    videoList,
    nextPageToken,
    isLoading,
    onLoadMore
}:VideoFeedProps){
    return(
        <div className={`flex flex-col w-full h-full gap-[12px] p-4`}>
            {videoList.map((video) => {
                return(
                    <VideoItem
                        key={video.id}
                        video={video}
                    />
                )
            })}
            {videoList && nextPageToken && (
                <div className="flex w-full align-center justify-center">

                    <LoadMoreButton 
                        isLoading={isLoading}
                        onLoadMore={onLoadMore}
                    />
                </div>
            )}
        </div>
    )
}