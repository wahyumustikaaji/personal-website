"use client";

import { Kanit } from "next/font/google";
import BoxReveal from "@/components/magicui/box-reveal";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '600',
});

export default function Footer() {
    return(
        <div className="mt-20 footer">
            <div className={`${kanit.className} flex items-center justify-between border-b-[3px] border-black pb-8 mb-10 mx-20`}>
                <BoxReveal duration={0.8}>
                <p className="font-bold text-[200px] tracking-tight text-black leading-none">LET'S TALK</p>
                </BoxReveal>
            </div>
            <div className="flex items-start gap-52 container-link-footer px-20 ">
                <div>
                <button className="font-extrabold leading-4 text-xl text-[#171010]">
                  WAHYUAJI <br /> PORTFOLIO
                  </button>
                </div>
                <div>
                    <p className="text-base text-black font-medium mb-5">
                        Drop me a line
                    </p>
                    <a href="mailto:wahyuma123@gmail.com" className="text-2xl text-[#171010] font-bold">
                    wahyuma123@gmail.com
                    </a>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <p className="text-base text-black font-medium mb-5">
                        Link
                    </p>
                    <a href="/" className="text-lg text-black font-medium">Home</a>
                    <a href="/about" className="text-lg text-black font-medium">About</a>
                    <a href="/projects" className="text-lg text-black font-medium">Project</a>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <p className="text-base text-black font-medium mb-5">
                        Social Media
                    </p>
                    <a href="https://instagram.com/wahyumustikaaji_" className="text-lg text-black font-medium">Instagram</a>
                    <a href="www.linkedin.com/in/wahyumustikaaji" className="text-lg text-black font-medium">LinkedIn</a>
                    <a href="https://github.com/WayuAji30" className="text-lg text-black font-medium">GitHub</a>
                </div>
            </div>
            <div className="bg-[#171010] px-20 py-5 mt-24">
                <p className="text-base font-light text-white">&copy;2024 by WahyuMustikaAji</p>
            </div>
        </div>
    )
}