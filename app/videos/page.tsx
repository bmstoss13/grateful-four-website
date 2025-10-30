'use client'

import PageHeader from "@/components/PageHeader/PageHeader";
import VideoFeed from "@/components/Videos/VideoFeed";
import { Video } from "@/utils/Types";
import { useEffect, useState } from "react";

import axios from "axios";
export default function VideosPage(){
    const [videoList, setVideoList] = useState<Video[] | null>(null);

    const handleFetchVideos = async () => {
        try{
            const url = '/api/videos'
            const { data } = await axios.get(url);
            setVideoList(data.videos)
        } catch (err) {
            console.error("frontend: error while fetching videos: ", err);
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

        </div>
    )
}