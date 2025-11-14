'use client'

import PageHeader from "@/components/PageHeader/PageHeader";
import VideoFeed from "@/components/Videos/VideoFeed";
import { DynamoVideoItem, PaginatedVideosResponse, Video } from "@/utils/Types";
import { useEffect, useState } from "react";
import PageFooter from "@/components/Footer/PageFooter";
import { apiInstance } from "@/utils/apiHelper";
import LoadMoreButton from "@/components/Videos/LoadMoreButton";
import { useInfiniteQuery, QueryFunctionContext, InfiniteData } from "@tanstack/react-query";
import VideoItemSkeleton from "@/components/Videos/VideoItemSkeleton";


interface VideoPage{
    videos: Video[];
    nextPageToken: string | null;
}

type VideoPageParam = string | null;

const fetchVideos = async ( 
    context: QueryFunctionContext<string[], VideoPageParam>
): Promise<VideoPage | undefined> => {
    try{
        const pageToken = context.pageParam
        const { data } = await apiInstance.get<PaginatedVideosResponse>('/videos',
            {
                params: {
                    limit: 5,
                    nextPageToken: pageToken,                    
                }
            }
        )

        const videos: DynamoVideoItem[] = data.videos;

        const reformattedVideos: Video[] | null = videos.map(item => {
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

        const newToken = data.nextPageToken;
        const cleanNewToken = newToken ? decodeURIComponent(newToken) : null;
        console.log('next token: ', cleanNewToken)
        return {
            videos: reformattedVideos,
            nextPageToken: cleanNewToken
        }

    } catch (err) {
        console.error("frontend: error while fetching videos: ", err);
    }
}
export default function VideosPage(){

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isLoading,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['videos'],
        queryFn: fetchVideos,
        getNextPageParam: (lastPage) => lastPage?.nextPageToken,
        initialPageParam: null
    })

    const videoList = data?.pages.flatMap(page => page!.videos) || [];
    const showSkeletons = !data;

    const renderSkeletons = () => {
        return Array.from({ length: 5 }).map((_, index) => (
            <VideoItemSkeleton key={index} />
        ))
    }
    
    const handleLoadMore = () => {
        if(hasNextPage && !isFetching){
            fetchNextPage();
        }
    }
    return(
        <div className="w-full">
            <PageHeader 
                title="Videos"
                subHeaderText="View our latest performances below."
                backgroundImage="/videosBackground.png"
            />
            <div className='bg-gray-100'>
                {showSkeletons && (
                    <div className={`flex flex-col w-full gap-[12px] p-4`}>
                        {renderSkeletons()}
                    </div>
                )}
                {data && (
                    <VideoFeed 
                        videoList={videoList}
                        nextPageToken={hasNextPage}
                        isLoading={isFetchingNextPage}
                        onLoadMore={handleLoadMore}
                    />
                )}

                {error && (
                    <p>Failed to load videos.</p>
                )}
            </div>

            <PageFooter />

        </div>
    )
}