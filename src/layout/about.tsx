"use client";

import { Kanit } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import { timeline, animate, stagger } from "motion";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/components/heroAbout";
import DescMe from "@/components/descriptionMe";
import Velocity from "@/components/velocityScroll";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

function getSectionHeight(element: HTMLUListElement){
    const {height} = element.getBoundingClientRect();
    const {childElementCount} = element;

    return height / childElementCount;
}

export default function AboutPage() {
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
            <div
            data-scroll
            data-scroll-speed="0"
            >
            <div id="top" className="w-full fixed top-0"
            ref={navRef}
            >
                <Navbar textColor="text-white" bgColor="link-white"/>
            </div> 
                <AboutHero/>
            </div>
            
            <div
            data-scroll
            data-scroll-speed="5"
            >
                <DescMe/>
            </div>

            <div
            data-scroll
            data-scroll-speed="0"
            >
                <Velocity/>
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