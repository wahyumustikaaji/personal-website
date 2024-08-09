"use client";

import {motion} from "framer-motion"
import { useState } from "react";
import GradualSpacing from "../magicui/gradual-spacing";

export default function Work() {
    const [ isVisible, setVisible ] = useState(false);

    return(
        <div className="relative z-40">
            <div className="px-16 pt-10">
                 <GradualSpacing
                    className="text-[125px] text-[#F7F9F2] font-semibold"
                    text="SELECTED WORKS/"
                />
                <div className="w-full flex justify-end gap-10 mt-10 pr-20">
                    <p className="text-[#F7F9F2] text-xl font-normal">(Projects)</p>
                    <p className="text-[#F7F9F2] text-[22px] max-w-sm">Featured client projects that have been meticulously crafted with passion and purpose over the years.</p>
                </div>

                <div className="mt-24 pb-32">
                    <div 
                    data-scroll
                    data-scroll-speed="2"
                    className="flex items-end gap-10">
                        <div className="w-[800px] h-[500px] relative">
                            <img className="rounded-[40px] w-full h-full object-cover" src="https://tiperumah.id/blog/wp-content/uploads/2023/02/desain-home-office.jpg" alt="" />
                            <div className="w-[600px] h-[350px] bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <img className="rounded-lg w-full h-full object-cover" src="" alt="" />
                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-[50px] text-[#F7F9F2] white-before">
                                <GradualSpacing
                                    text="PROJECTHUB"
                                />
                            </a>
                            <p className="text-sm text-[#F7F9F2] uppercase mt-1">Website, Marketplace</p>
                        </div>
                    </div>
                    
                    <div 
                    data-scroll
                    data-scroll-speed="3"
                    className="flex justify-end items-end gap-10 mt-24">
                        <div>
                            <a href="#" className="text-[50px] text-[#F7F9F2] white-before">
                                <GradualSpacing
                                    text="PROJECTHUB"
                                />
                            </a>
                            <p className="text-sm text-end text-[#F7F9F2] uppercase mt-1">Website, Marketplace</p>
                        </div>
                        <div className="w-[800px] h-[500px] relative">
                            <img className="rounded-[40px] w-full h-full object-cover" src="https://tiperumah.id/blog/wp-content/uploads/2023/02/desain-home-office.jpg" alt="" />
                            <div className="w-[600px] h-[350px] bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <img className="rounded-lg w-full h-full object-cover" src="" alt="" />
                            </div>
                        </div>
                    </div>

                    <div 
                    data-scroll
                    data-scroll-speed="5"
                    className="flex items-end gap-10">
                        <div className="w-[800px] h-[500px] relative">
                            <img className="rounded-[40px] w-full h-full object-cover" src="https://tiperumah.id/blog/wp-content/uploads/2023/02/desain-home-office.jpg" alt="" />
                            <div className="w-[600px] h-[350px] bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <img className="rounded-lg w-full h-full object-cover" src="" alt="" />
                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-[50px] text-[#F7F9F2] white-before">
                                <GradualSpacing
                                    text="PROJECTHUB"
                                />
                            </a>
                            <p className="text-sm text-[#F7F9F2] uppercase mt-1">Website, Marketplace</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}