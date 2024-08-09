"use client";
 
import { useEffect, useState, useRef } from "react";
import { animate } from "motion";
import { motion } from "framer-motion";

export default function About() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    animate(element, { opacity: 1 }, { duration: 1 });
                    setHasAnimated(true);
                }
            },
            { threshold: 1 }
        );

        if (element && !hasAnimated) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [hasAnimated]);

    return(
            <div className="h-[120vh] flex items-center justify-center z-0 sticky top-0">
            <div 
            ref={ref}
            style={{opacity: 0}}
            className="w-full flex flex-col items-center justify-center">
                <p className="indent-20 text-[#F7F9F2] text-[40px] leading-[46px] max-w-[1100px] uppercase">
                    As a <span className="font-bold">frontend developer</span>, I help companies and organizations around the world
                    <span className="inline-flex items-center mx-4">
                        <motion.svg 
                        initial={{ rotate: 90 }}
                        animate={{ rotate: -90 }}
                        transition={{ 
                            ease: [0.6, 0.01, -0.05, 0.95], 
                            duration: 1.5, 
                            repeat: Infinity, 
                            repeatType: "reverse" 
                        }}
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                            <path fill="#F7F9F2" d="m229.5 113l-63.44-23.06L143 26.5a16 16 0 0 0-30 0L89.94 89.94L26.5 113a16 16 0 0 0 0 30l63.44 23.07L113 229.5a16 16 0 0 0 30 0l23.07-63.44L229.5 143a16 16 0 0 0 0-30m-72.42 39.3a8 8 0 0 0-4.78 4.78L128 223.9l-24.3-66.82a8 8 0 0 0-4.78-4.78L32.1 128l66.82-24.3a8 8 0 0 0 4.78-4.78L128 32.1l24.3 66.82a8 8 0 0 0 4.78 4.78L223.9 128Z"/>
                        </motion.svg>
                    </span>
                    engage with their audience and drive their business growth.
                </p>
                <p className="indent-20 text-[#F7F9F2] text-[40px] leading-[46px] max-w-[1100px] uppercase mt-16">
                    I work on projects directly 
                    <span className="inline-flex items-center mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="#F7F9F2" fill-rule="evenodd" d="M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>                            
                    </span>
                    with clients as well as provide support for agencies and studios globally.
                </p>
            </div>
        </div>
    )
}