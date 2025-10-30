import path from "path";
import { Video } from "../Types";
import { promises } from "fs";

export async function getStaticVideosFromJSON(): Promise<Video[] | null>{
    try{
        const jsonData = await promises.readFile(process.cwd() + '/utils/StaticVideos/StaticVideos.json', 'utf8')
        const objectData = JSON.parse(jsonData)
        return objectData as Video[];
    } catch (err) {
        console.error("backend: error retrieving video list from provided json: ", err)
        throw new Error("error while fetching data from json")
    }
}