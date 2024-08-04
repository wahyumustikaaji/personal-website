"use client";
 
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { Kanit } from "next/font/google";
import LetterPullup from "@/components/magicui/letter-pullup";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '600',
});

export default function Offer() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    
    useEffect(() => {
        setColor(theme === "white" ? "#ffffff" : "#ffffff");
    }, [theme]);
    
    return(
        <div className="h-screen flex items-center justify-center py-10 px-14">
            <div className="bg-black rounded-lg w-full h-full relative">
                <div className="w-full h-full flex flex-col items-center justify-center absolute z-10">
                    <p className="text-white text-xl font-medium mb-5">(Want to have your dream website)</p>
                    <div className={kanit.className}>
                        <LetterPullup words={"LET'S MAKE"} delay={0.05} />
                        <LetterPullup words={"IT HAPPEN"} delay={0.05} />
                    </div>
                    <button
                        className="group overflow-hidden relative border-[1px] mt-14 border-white text-white rounded-full w-[230px] py-3.5 text-lg font-medium"
                        >
                        <div>
                            <span>Book A Call</span>
                        </div>
                        <div className="absolute w-full h-full bg-white text-black translate-y-[15px] group-hover:-translate-y-[41.5px] flex justify-center items-center duration-500 transition-all ease-in-out">
                            Let's Go
                        </div>
                    </button>
                </div>
            <Particles
                className="absolute z-0 inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
            </div>
        </div>
    )
}