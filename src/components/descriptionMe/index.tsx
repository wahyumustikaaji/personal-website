"use client";

import { Kanit } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import { animate } from "motion";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

export default function DescMe() {
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
            { threshold: 0.8 }
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

    return (
        <div className="px-16 bg-white">
            <div className="flex items-start justify-between pt-40">
                <div className="w-full">
                    <div 
                    ref={ref}
                    style={{opacity: 0}}
                    >
                        <p className="text-[55px] text-black leading-[70px]">
                            Hello, I’m Wahyu Aji <br />a Frontend Developer, <br />from Indonesia.
                        </p>
                        <p className="text-lg mt-8 text-black max-w-[520px]">
                            Passionate about building engaging, user-centered websites. I enjoy turning creative concepts into seamless, responsive experiences.
                        </p>
                        <p className="text-lg mt-3 text-black max-w-[520px]">
                            Working closely with designers and backend teams, I focus on bridging design and functionality. My experience includes integrating Web3 and blockchain to bring innovative, future-ready solutions.
                        </p>
                        <p className="text-lg mt-3 text-black max-w-[520px]">
                            Driven by a love for continuous learning, I’m always exploring new tools and trends to bring fresh ideas to every project. I am dedicated to helping clients achieve their goals through high-quality, reliable frontend development, ensuring that each project makes a lasting impact.
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <img 
                    src="https://i.ibb.co.com/dBMQfsK/pp.jpg" 
                    alt="wahyu aji" 
                    className="h-[800px] object-cover w-[600px] mx-auto rounded-2xl"
                    />
                </div>
            </div>
        </div>
    )
}