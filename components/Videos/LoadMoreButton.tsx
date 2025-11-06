interface LoadMoreButtonProps{
    isLoading: boolean;
    onLoadMore: () => void;
}

export default function LoadMoreButton({
    isLoading,
    onLoadMore
}:LoadMoreButtonProps){
    return(
        <button 
            onClick={()=>onLoadMore()}
            disabled={isLoading}
            className={`w-full max-w-4xl p-[12px] text-[18px] text-white bg-indigo-500 
                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-lg'}
                rounded-xl font-bold  focus:translate-y-0.5
                transition-all duration-[0.1s] ease
            `}
        >
            {isLoading ? `Loading...`:`Load More`}
        </button>
    )
}