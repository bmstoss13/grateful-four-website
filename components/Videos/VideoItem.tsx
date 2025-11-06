import YouTube, { YouTubeProps } from 'react-youtube';
import { Video } from "@/utils/Types"
import { useState } from 'react';

interface VideoItemProps{
    video: Video;
}

export default function VideoItem({
    video
}:VideoItemProps){
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const handleReady: YouTubeProps['onReady'] = () => {
        setIsPlayerReady(true)
    }

    return(
        <div className='w-full max-w-4xl mx-auto'>
            <div className='relative w-full pb-[56.25%] rounded-xl overflow-hidden'>
                {!isPlayerReady && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black animate-pulse">
                        {/* Optionally, place a central loading spinner here */}
                    </div>
                )}
                <div className="absolute top-0 left-0 w-full h-full">
                    <YouTube 
                        videoId={video.id} 
                        opts={opts} 
                        onReady={handleReady}
                        style={
                            { 
                                height: '100%', 
                                width: '100%', 
                                }
                            }
                        />
                </div>
            </div>
        </div>
    )
}