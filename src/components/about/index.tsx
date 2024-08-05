"use client";
 
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";

export default function About() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    
    useEffect(() => {
        setColor(theme === "light" ? "#ffffff" : "#ffffff");
    }, [theme]);

    return(
            <div className="h-screen flex items-center justify-center bg-black z-0 sticky top-0">
                <div className="w-full flex items-start justify-between px-20">
                    <div className="w-32">
                        <p className="text-white text-lg font-medium">(About me)</p>
                    </div>
                    <div className="w-full flex items-center justify-center pl-10">
                        <p className="text-white text-[40px] leading-[46px] max-w-[750px] font-medium">
                            As a frontend developer, I help companies and organizations around the world engage with their audience and drive their business growth.
                            <br/>
                            <br/> I work on projects directly with clients as well as provide support for agencies and studios globally.
                        </p>
                    </div>
                </div>
                <Particles
                    className="absolute inset-0"
                    quantity={100}
                    ease={80}
                    color={color}
                    refresh
                />
            </div>
    )
}