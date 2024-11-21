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
                src="/images/projects/aeternum/mockup_aeternum.png" 
                alt="DetailWork" 
                width={1920} 
                height={1080} 
                style={{ width: '100%', height: 'auto' }} 
            />

            <div className="relative">
                <div className="px-16 py-36 flex items-center justify-between">
                    <div className={kanit.className} >
                        <h1 className="uppercase font-bold text-5xl">My Role</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="28"
                            viewBox="0 0 238 28"
                            fill="none"
                            style={{ strokeDasharray: "1000px, 1000px" } as React.CSSProperties}
                            >
                            <path
                                d="M5.83887 22.8387C19.6597 22.4068 33.0508 18.7798 46.6095 16.3871C89.9199 8.74411 133.51 7.17148 177.434 6.08246C188.003 5.8204 213.067 5.27601 226 5.27601C228.194 5.27601 234.192 4.54845 232.541 5.99286C228.899 9.18023 218.251 8.72566 214.083 9.12906C183.659 12.0733 153.449 12.2497 122.954 13.4301C111.327 13.8802 99.9438 15.1841 88.4554 16.9248C85.1588 17.4242 78.544 17.3334 75.5521 19.6129C71.4434 22.7434 85.7989 21.2068 90.9643 21.2258C113.604 21.3091 136.25 20.9982 158.885 21.5843C162.701 21.683 171.905 22.008 176.627 22.4803C177.292 22.5468 175.324 22.8314 174.656 22.8387C167.788 22.9142 160.915 22.8387 154.047 22.8387C146.042 22.8387 138.037 22.8387 130.032 22.8387"
                                stroke="#F9F971"
                                strokeOpacity="0.917647"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                            </svg>
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