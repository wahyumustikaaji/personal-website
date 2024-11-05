"use client";

import { Kanit } from "next/font/google";
import Meteors from "../ui/meteors";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

export default function ProjectsHero() {
    return (
        <div className="bg-[#171010] pt-72 px-16 w-full relative">
            <Meteors number={30} />
            <p className="text-white text-base italic font-serif">Since 2022</p>
            <div className={kanit.className}>
                <p className="font-bold text-[170px] text-white leading-none pb-8">
                PROJECTS</p>
            </div>
        </div>
    );
}