'use client'

import NavItemLayout from "./NavItemLayout";
import SocialMediaItemLayout from "./SocialMediaItemLayout";

export default function TopBar(){
    return(
        <main className={`flex w-full max-h-[100px] bg-[var(--primary)] 
        pl-[12px] pr-[12px] pt-[20px] pb-[20px] items-center fixed`}>
            <NavItemLayout />
            <SocialMediaItemLayout />
        </main>
    )
}