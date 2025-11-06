'/api/videos'

import { getStaticVideosFromJSON } from "@/utils/StaticVideos/videos"
import { NextResponse } from "next/server"

const DEFAULT_LIMIT = 10;
export async function GET(request: Request){
    try{
        const { searchParams } = new URL(request.url)
        const limit = parseInt(searchParams.get('limit') || String(DEFAULT_LIMIT), 10);
        const pageToken = searchParams.get('nextPageToken')

        const allVideos = await getStaticVideosFromJSON();

        if(!allVideos) {
           return NextResponse.json(allVideos) 
        }

        let startIndex = 0;
        if (pageToken) {
            startIndex = parseInt(pageToken, 10) || 0;
        }

        const endIndex = startIndex + limit;

        const videosForPage = allVideos.slice(startIndex, endIndex)
        
        let nextToken = null;

        if (endIndex < allVideos.length) {
            nextToken = String(endIndex);
        }

        return NextResponse.json({
            videos: videosForPage,
            nextPageToken: nextToken
        })
    } catch(err){
        console.error("api error: failed to retrieve videos: ", err);
        return NextResponse.json(
            { error: "failed to fetch static videos from json"},
            { status: 500}
        );
    }
}