"use client";

import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

const labels = ["Blockchain", "Web3", "Reactjs", "Tailwind CSS", "Smart Contract"];

export default function HeroDetailWork() {
    return (
        <div className="absolute bottom-0 px-16">
            <p className="text-white text-base italic font-serif">2024</p>
            <div className={`${kanit.className} flex items-center justify-between w-full gap-28 pb-14`}>
                <p className="font-bold text-[170px] text-white leading-none">
                AETERNUM</p>
                <div className="flex flex-wrap items-center">
                    {labels.map((label, index) => (
                        <div
                        key={index}
                        className="border-[1px] border-white px-6 py-1.5 rounded-full m-1"
                        >
                        <p className="text-white uppercase">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}