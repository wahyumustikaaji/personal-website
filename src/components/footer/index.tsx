"use client";

import { Kanit } from "next/font/google";
import BoxReveal from "@/components/magicui/box-reveal";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '600',
});

export default function Footer() {
    return(
        <div className="px-20 mt-40 footer">
            <div className={kanit.className}>
                <BoxReveal duration={0.8}>
                <p className="font-bold text-[130px] text-black leading-none">WAHYU AJI</p>
                </BoxReveal>
                <BoxReveal duration={0.8}>
                <p className="font-bold text-[130px] text-black leading-none -mt-5">FRONTEND DEV</p>
                </BoxReveal>
            </div>
            <div className="flex items-center justify-between container-link-footer">
                <div className="link-footer flex items-center gap-5">
                    <a href="#" className="text-lg text-black font-medium">Instagram</a>
                    <a href="#" className="text-lg text-black font-medium">LinkedIn</a>
                    <a href="#" className="text-lg text-black font-medium">GitHub</a>
                </div>
                <div>
                    <a href="#top" className="text-lg text-black font-medium flex items-center gap-1">
                        Back to top
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="black" d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5z"/></svg>                    
                    </a>
                </div>
                <div>
                    <p className="text-lg text-black font-medium">Copyright&copy;WahyuAji</p>
                </div>
            </div>
        </div>
    )
}