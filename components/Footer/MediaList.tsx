import MediaItem from "./MediaItem";

export default function MediaList(){
    return(
        <span className="flex mt-[16px] gap-[6px]">
            <MediaItem 
                linkTo="https://www.youtube.com/@russpowell5171" //Placeholder
                icon="/youtube.svg"
                altText="YouTube Page"
                width={36}
                height={36}
            />
            <MediaItem
                linkTo="https://www.facebook.com/"
                icon="/facebook.svg"
                altText="Facebook Profile"
                width={36}
                height={36}
            />
        </span>
    )
}