"use client";

import {motion} from "framer-motion"
import { useState } from "react";

export default function Work() {
    const [ isVisible, setVisible ] = useState(false);

    return(
        <div className="relative">
            <div className="px-16 mt-10">
                <p className="text-[125px] text-neutral-900 font-semibold">SELECTED WORKS/</p>
                <div className="w-full flex justify-end gap-10 mt-10 pr-20">
                    <p className="text-neutral-800 text-xl font-normal">(Projects)</p>
                    <p className="text-neutral-800 text-[22px] max-w-sm">Featured client projects that have been meticulously crafted with passion and purpose over the years.</p>
                </div>
            </div>
            <div className="sticky top-0 group cursor-pointer">
                <motion.div 
                initial={{ 
                    scale: 0.5,
                    borderRadius: "50%"
                 }}
                whileInView={{ scale: 1 }}
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                animate={{ borderRadius: "0%" }}
                transition={{ duration: 1 }}
                className="w-full mx-auto mt-20 relative group-hover:max-w-full transition-all duration-1000">
                    <img src="https://cdn.logojoy.com/wp-content/uploads/20240105143459/web-design-trends-header-2024.jpg" alt="" className="w-full h-screen object-cover transform duration-1000" />
                    <div className="absolute top-0 px-10 pt-8 w-full flex items-center justify-between">
                        <p className="text-lg text-white font-medium bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 px-6 py-1.5 rounded-full">Projecthub</p>
                        <div className="flex items-center gap-3">
                             <p className="text-lg text-neutral-900 font-medium bg-white px-6 py-1.5 rounded-full">Website</p>
                             <p className="text-lg text-neutral-900 font-medium bg-white px-6 py-1.5 rounded-full">Marketplace</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="sticky top-0 group cursor-pointer">
                <motion.div 
                initial={{ 
                    scale: 0.5,
                    borderRadius: "50%"
                 }}
                whileInView={{ scale: 1 }}
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                animate={{ borderRadius: "0%" }}
                transition={{ duration: 1 }}
                className="w-full mx-auto mt-20 relative group-hover:max-w-full transition-all duration-1000">
                    <img src="https://cdn.dribbble.com/userupload/11827808/file/original-5df76c71befec7bcf7ef855106400212.png?resize=1200x900" alt="" className="w-full h-screen object-cover transform duration-1000" />
                    <div className="absolute top-0 px-10 pt-8 w-full flex items-center justify-between">
                        <p className="text-lg text-white font-medium bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 px-6 py-1.5 rounded-full">Projecthub</p>
                        <div className="flex items-center gap-3">
                             <p className="text-lg text-neutral-900 font-medium bg-white px-6 py-1.5 rounded-full">Website</p>
                             <p className="text-lg text-neutral-900 font-medium bg-white px-6 py-1.5 rounded-full">Marketplace</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="sticky top-0 group cursor-pointer">
                <motion.div 
                initial={{ 
                    scale: 0.5,
                    borderRadius: "50%"
                 }}
                whileInView={{ scale: 1 }}
                viewport={{
                    once: true,
                    amount: 0.1
                }}
                animate={{ borderRadius: "0%" }}
                transition={{ duration: 1 }}
                className="w-full mx-auto mt-20 relative group-hover:max-w-full transition-all duration-1000">
                    <img src="https://cdn.dribbble.com/userupload/11827808/file/original-5df76c71befec7bcf7ef855106400212.png?resize=1200x900" alt="" className="w-full h-screen object-cover transform duration-1000" />
                    <div className="absolute top-0 px-10 pt-8 w-full flex items-center justify-between">
                        <p className="text-lg text-white font-medium bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 px-6 py-1.5 rounded-full">See all projects</p>
                        <div className="flex items-center gap-3">
                             <motion.div
                             animate={{
                                scale: [1, 1, 1, 1, 1],
                                rotate: [0, 0, 180, 180, 0],
                                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                }}
                                transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                                }}
                             className="bg-black border-[2px] border-black w-8 h-8 rounded-md"></motion.div>
                             <motion.div
                             animate={{
                                scale: [1, 1, 1, 1, 1],
                                rotate: [180, 180, 0, 0, 0],
                                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                }}
                                transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                                }}
                             className="bg-white border-[2px] border-white w-8 h-8 rounded-full"></motion.div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-1000">
                        <button className="relative bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 w-56 h-56 rounded-full">
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-medium w-full">View More</p>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}