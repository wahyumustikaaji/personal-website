"use client";

import Image from "next/image";
import { Kanit } from "next/font/google";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SwipeCarousel } from "./carousel";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

export default function DetailWork() {
    return (
        <div>
            <Image 
                src="/images/projects/mockup_aeternum.png" 
                alt="DetailWork" 
                width={1920} 
                height={1080} 
                style={{ width: '100%', height: 'auto' }} 
            />

            <div className="relative">
                <div className="px-16 py-36 flex items-center justify-between">
                    <div className={kanit.className} >
                        <h1 className="uppercase font-bold text-4xl">My Role</h1>
                    </div>
                    <p className="text-xl max-w-[630px]">As part of this project, my primary tasks were to create the website layout, develop a 3D model, integrate it into the site, and implement animations. I closely collaborated with designers throughout the process to ensure the final product was both high quality and visually appealing.</p>
                </div>
                <div className="bg-[#171010] w-16 h-16 rounded-full absolute bottom-0 left-96"></div>
                <div className="bg-[#171010] w-36 h-36 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <button className="bg-[#171010] text-white text-xl w-36 h-36 rounded-full absolute right-32 -bottom-10 flex items-center gap-0.5 justify-center group">
                    <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-500 ease-linear">Live site</span>
                    <svg className="rotate-45 -translate-x-2 scale-0 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-500 ease-linear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M13 20V7.83l5.59 5.59L20 12l-8-8l-8 8l1.41 1.41L11 7.83V20z"/></svg>
                </button>
            </div>

            <div className="bg-black mt-72">
                <VelocityScroll
                    text="AETERNUM · "
                    default_velocity={1}
                    className="font-display text-center italic text-9xl leading-none py-8 font-bold tracking-[-0.02em] text-white dark:text-white"
                />
            </div>
            
            <SwipeCarousel/>
        </div>
    );
}