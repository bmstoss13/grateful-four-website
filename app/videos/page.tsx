'use client'

import PageHeader from "@/components/PageHeader/PageHeader";
import VideoFeed from "@/components/Videos/VideoFeed";
import { DynamoVideoItem, Video } from "@/utils/Types";
import { useEffect, useState } from "react";
import PageFooter from "@/components/Footer/PageFooter";
import { apiInstance } from "@/utils/apiHelper";

export default function VideosPage(){
    const [videoList, setVideoList] = useState<Video[] | null>(null);

    const handleFetchVideos = async () => {
        try{
            const { data } = await apiInstance.get<DynamoVideoItem[]>('/videos')

            const reformattedVideos: Video[] | null = data.map(item => {
                if(!item.SK.startsWith("VIDEO#")){
                    return null;
                }

                const videoId = item.SK.split('#')[1];

                return {
                    id: videoId,
                    title: undefined, 
                    uploadedAt: undefined,
                } as Video;
            }).filter((video): video is Video => video !== null)

            setVideoList(reformattedVideos)
        } catch (err) {
            console.error("frontend: error while fetching videos: ", err);
            setVideoList([]); //error catching
        }
    }

    useEffect(() => {
        handleFetchVideos();
    }, [])
    return(
        <div className="w-full">
            <PageHeader 
                title="Videos"
                subHeaderText="View our latest performances here."
            />
            {videoList && (
                <VideoFeed 
                    videoList={videoList}
                />
            )}
            <PageFooter />

        </div>
    )
}