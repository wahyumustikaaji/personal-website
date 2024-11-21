"use client";

import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

export default function AboutHero() {
    return (
        <div className="absolute bottom-0 px-16">
            <p className="text-white text-base italic font-serif">Let me share a few things...</p>
            <div className={kanit.className}>
                <p className="font-bold text-[170px] text-white leading-none pb-8">
                ABOUT ME</p>
            </div>
        </div>
    );
}