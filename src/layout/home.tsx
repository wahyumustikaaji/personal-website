"use client";

import { Kanit } from "next/font/google";
import { useEffect, useRef } from "react";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import { timeline, animate, stagger } from "motion";

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
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const countRef = useRef<HTMLUListElement | null>(null);
    const countRef2 = useRef<HTMLUListElement | null>(null);

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

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
            <div
            data-scroll
            className="bg-transparant w-full px-16 py-8">
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-40">
                    <button className="font-extrabold leading-4 text-sm text-black">
                    WAHYUAJI <br /> PORTFOLIO
                    </button>
                    <p className="font-medium text-black text-lg">Available for work</p>
                </div>
                <div className="flex items-center gap-32">
                    <div className="flex items-center gap-1">
                    <a href="#" className="text-lg text-black font-medium">
                        Projects,
                    </a>
                    <a href="#" className="text-lg text-black font-medium">
                        About,
                    </a>
                    <a
                        href="https://medium.com/@wahyuma123"
                        className="text-lg text-black font-medium"
                    >
                        Blog
                    </a>
                    </div>
                    <a href="mailto:wahyuma123@gmail.com" className="text-lg text-black font-medium">
                    wahyuma123@gmail.com
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div 
            data-scroll
            data-scroll-speed="-8"
            className="2xl:mx-auto px-16">
                <div 
                data-scroll-speed="-5" 
                ref={titleRef}
                className="flex flex-col justify-center items-center h-screen">
                    <div className="flex items-center justify-center w-full gap-10 relative">
                        <div
                        className="transition-opacity w-[100px] h-[100px] rounded-full gradient-background">
                        </div>
                        <div className={kanit.className}>
                        <div>
                            <p className="font-bold text-[140px] text-black leading-none">
                            WAHYU AJI</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly w-full">
                        <div className={kanit.className}>
                            <div>
                            <p className="font-bold text-[140px] text-black leading-none">FRONTEND</p>
                            </div>
                        </div>
                        <p className="transition-opacity text-black font-medium text-lg font-sans duration-1000">
                            With directed art guidance and web<br/> design, I support global companies<br/> in expanding their business.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <div className={kanit.className}>
                        <div>
                            <p className="font-bold text-[140px] text-black leading-none">DEVELOPER</p>
                        </div>
                        </div>
                    </div>
                        <div className="transition-opacit mt-12 duration-1000 flex items-center justify-center w-full">
                            <button
                                className="group overflow-hidden relative border-[1px] border-black rounded-full w-[270px] py-3.5 text-lg font-medium"
                                >
                                <div>
                                    <span>wahyuma123@gmail.com</span>
                                </div>
                                <div className="absolute w-full h-full bg-black text-white translate-y-[15px] group-hover:-translate-y-[41.5px] flex justify-center items-center duration-500 transition-all ease-in-out">
                                    Let's Connect
                                </div>
                            </button>
                        </div>
                </div>
            </div> 

            <div 
            data-scroll
            data-scroll-speed="0"
            className="w-full h-full bg-black rounded-t-[50px]">
                <div className="px-20 pt-8">
                    <div className={kanit.className}>
                        <p className="text-[125px] text-white font-semibold">HOW I CAN HELP YOU/</p>
                        <div className="w-full flex justify-end gap-10 mt-10 pr-20">
                            <p className="text-white text-xl font-extralight">(Services)</p>
                            <p className="text-white text-[22px] max-w-sm">My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results.</p>
                        </div>
                    <div className="mt-10 relative">
                        <div className="flex bg-black items-start justify-between border-t-[1px] border-white">
                            <div className="w-full">
                                <p className="text-white text-[58px] font-bold mt-2">Web Development</p>
                                <p className="text-white text-lg max-w-sm leading-6 mt-3">I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.</p>
                            </div>
                            <div className="w-full max-w-[600px]">
                                <div className="flex justify-end mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><rect width="7.33" height="7.33" x="1" y="1" fill="#262626"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="#262626"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"/></rect></svg>
                                </div>
                                <ul className="flex flex-col gap-y-3 mt-20">
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">01</span>Landing Page</p>
                                    </li>
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">02</span>E-Commerce</p>
                                    </li>
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">03</span>Company Profil</p>
                                    </li>
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">04</span>Blog</p>
                                    </li>   
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">05</span>Custom Website</p>
                                    </li>   
                                </ul>
                            </div>
                        </div>
                        <div className="flex bg-black items-start justify-between border-t-[1px] border-white">
                            <div className="w-full">
                                <p className="text-white text-[58px] font-bold mt-2">SEO</p>
                                <p className="text-white text-lg max-w-sm leading-6 mt-3">Beyond crafting visually memorable websites, I also optimize your online presence to elevate your visibility in search rankings so your voices can be heard in the digital landscape.</p>
                            </div>
                            <div className="w-full max-w-[600px]">
                                <div className="flex justify-end mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><rect width="2.8" height="12" x="1" y="6" fill="#262626"><animate id="svgSpinnersBarsScale0" attributeName="y" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="5.8" y="6" fill="#262626"><animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="10.6" y="6" fill="#262626"><animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="15.4" y="6" fill="#262626"><animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="20.2" y="6" fill="#262626"><animate id="svgSpinnersBarsScale1" attributeName="y" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect></svg>                                </div>
                                <ul className="flex flex-col gap-y-3 mt-20">
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">01</span>Technical SEO</p>
                                    </li>
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">02</span>On-Page Optimization</p>
                                    </li>
                                    <li>
                                        <p className="text-white text-3xl font-bold flex gap-10 border-b-[1px] border-white pb-3"><span className="text-2xl font-light">03</span>SEO Audits & Analysis</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};