'/api/videos'

import { getStaticVideosFromJSON } from "@/utils/StaticVideos/videos"
import { NextResponse } from "next/server"

export async function GET(){
    try{
        const data = await getStaticVideosFromJSON();
        return NextResponse.json({ videos: data })
    } catch(err){
        console.error("api error: failed to retrieve videos: ", err);
        return NextResponse.json({ error: "failed to fetch static videos from json"});
    }
}