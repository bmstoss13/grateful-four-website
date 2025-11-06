import React from 'react';

export default function VideoItemSkeleton() {
    return (
        <div className='w-full max-w-4xl mx-auto'>
                    {/* Aspect Ratio Box: Same ratio as your video (e.g., pb-[177.78%] for 9:16) */}
                    {/* The bg-gray-200 and animate-pulse provide the skeleton effect */}
                    <div className='relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl'>
                        <div className="absolute bottom-[-24px] left-0 w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                {/* Adding extra space to match the VideoFeed's spacing */}
                {/* <div className="h-6"></div>  */}
            </div>        
    )
}