import YouTube, { YouTubeProps } from 'react-youtube';
import { Video } from "@/utils/Types"

interface VideoItemProps{
    video: Video;
}

export default function VideoItem({
    video
}:VideoItemProps){
    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return(
        <div className='self-center'>
            <YouTube videoId={video.id} opts={opts} />
        </div>
    )
}