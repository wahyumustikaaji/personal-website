"use client";

import { Kanit } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import { timeline, animate, stagger } from "motion";
import About from "@/components/about";
import { motion } from "framer-motion"
import Work from "@/components/work";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import Offer from "@/components/offer";
import Journey from "@/components/about/journey";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

function getSectionHeight(element: HTMLUListElement){
    const {height} = element.getBoundingClientRect();
    const {childElementCount} = element;

    return height / childElementCount;
}

export default function HomePage() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const countRef = useRef<HTMLUListElement | null>(null);
    const countRef2 = useRef<HTMLUListElement | null>(null);

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);

    const [locomotiveRef] = useLocomotiveScroll({
        ref: scrollRef,
        smooth: true,
        smoothMobile: true
    })

    useEffect(() => {
        if (countRef.current && countRef2.current){
            const transformAmmount = getSectionHeight(countRef.current)

            const sequence = new Array(3)
            .fill("")
            .flatMap((_, index) => [
                [countRef.current, {y: `-${transformAmmount * (index + 1)}px`}],
                [countRef2.current, {y: `-${transformAmmount * (index + 1)}px`}, { at: "-1.8"}]
            ])

            timeline(sequence, {
                defaultOptions: {easing: [0.77, 0, 0.175, 1], duration: 2}
            });
        }
    }, [])


    useEffect(() => {
        const sequence = [
            [titleRef.current, {scale: 1.2}],
            [navRef.current, {y: -100}, {at: "<"}],
            [countRef.current, {opacity: 0}, {at: "<"}],
            [countRef2.current, {opacity: 0}, {at: "<"}],
            [loaderRef.current, {y: "-100vh"}, {at: "-0.5"}],
            [titleRef.current, {scale: 1}, {at: "-0.5"}],
            [navRef.current, {y: 0}, {at: "-0.8"}],
        ]; 
    
        timeline(sequence, {
            defaultOptions: {
                easing: [0.77, 0, 0.175, 1],
                duration: 1,
                delay: 7
            }
        })
    }, [])
  return (
    <>
        <div className="loader-container" ref={loaderRef}>
            <div className="counter-container">
            <ul className="counter-list" ref={countRef}>
                <li>
                <h3>0</h3>
                </li>
                <li>
                <h3>3</h3>
                </li>
                <li>
                <h3>7</h3>
                </li>
                <li>
                <h3>9</h3>
                </li>
            </ul>
            </div>

            <div className="counter-container">
            <ul className="counter-list" ref={countRef2}>
                <li>
                <h3>8</h3>
                </li>
                <li>
                <h3>0</h3>
                </li>
                <li>
                <h3>8</h3>
                </li>
                <li>
                <h3>9</h3>
                </li>
            </ul>
            </div>
        </div>

        <div
        data-scroll-container
        ref={scrollRef}
        >
            <div id="top"  className="w-full absolute top-0"
            ref={navRef}
            >
                <Navbar/>
            </div>

            <div 
            data-scroll
            data-scroll-speed="-8"
            className="2xl:mx-auto px-16 h-screen flex justify-center items-center">
                <div 
                data-scroll-speed="-5" 
                ref={titleRef}
                className="flex flex-col justify-center items-center w-full mt-10">
                    <div className="flex items-center justify-center w-full gap-10 relative">
                        <p className="text-base font-medium">GOOD DEVELOPER IS HONEST</p>
                        <div className={kanit.className}>
                        <div>
                            <p className="font-bold text-[140px] text-[#171010] leading-none">
                            WAHYU AJI</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly w-full">
                        <div className={kanit.className}>
                            <div>
                            <p className="font-bold text-[140px] text-[#171010] leading-none">FRONTEND</p>
                            </div>
                        </div>
                        <p className="transition-opacity text-[#171010] font-medium text-lg font-sans duration-1000">
                            With directed art guidance and web<br/> design, I support global companies<br/> in expanding their business.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <div className={kanit.className}>
                        <div>
                            <p className="font-bold text-[140px] text-[#171010] leading-none">DEVELOPER</p>
                        </div>
                        </div>
                    </div>
                    <motion.svg 
                    initial={{ y: 20, rotate:180 }}
                    animate={{ y: 0 }}
                    transition={{ 
                        ease: [0.6, 0.01, -0.05, 0.95], 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                    }}
                    className="mt-10"
                    xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 15 15"><path fill="#171010" fill-rule="evenodd" d="m7.5.793l4.354 4.353l-.707.708L8 2.707V14H7V2.707L3.854 5.854l-.708-.708z" clip-rule="evenodd"/></motion.svg>
                </div>
            </div> 

            <div
            data-scroll
            data-scroll-speed="0"
            className="bg-[#171010] rounded-t-[30px]"
            >
                <About/>
                <Work/>
            
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
            </div>

            <div
            data-scroll
            data-scroll-speed="5"
            >
                <Journey/>
            </div>

            <div
            data-scroll
            data-scroll-speed="0"
            >
                <Offer/>
            </div>
            
            <div
            data-scroll
            data-scroll-speed="0"
            >
                <Footer/>
            </div>
        </div>
    </>
  );
};