import SocialMediaItem from "./SocialMediaItem";

export default function SocialMediaItemLayout(){
    return(
        <span className={`flex gap-[10px] ml-auto`}>
            {/* YouTube */}
            <SocialMediaItem
                linkTo="https://www.youtube.com/@russpowell5171" //Placeholder
                icon="/youtube.svg"
                altText="YouTube Page"
                width={20}
                height={20}
            />
            <SocialMediaItem
                linkTo="https://www.facebook.com/"
                icon="/facebook.svg"
                altText="Facebook Profile"
                width={20}
                height={20}
            />
        </span>
    )
}