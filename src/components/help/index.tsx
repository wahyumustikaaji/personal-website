"use client";
 
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

export default function HelpYou() {
    
    return(
        <section className="bg-black sticky top-0 z-20">
            <div className="w-full bg-white rounded-t-[50px]">
                <div className="px-20 pt-8">
                    <div className={kanit.className}>
                        <p className="text-[125px] text-neutral-800 font-semibold">HOW I CAN HELP YOU/</p>
                        <div className="w-full flex justify-end gap-10 mt-10 pr-20">
                            <p className="text-neutral-800 text-xl font-extralight">(Services)</p>
                            <p className="text-neutral-800 text-[22px] max-w-sm">My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results.</p>
                        </div>
                    <div className="mt-10 relative">
                        <div className="flex bg-white items-start justify-between border-t-[1px] border-black sticky top-32 pb-[230px]">
                            <div className="w-full">
                                <p className="text-neutral-800 text-[58px] font-bold mt-2">Web Development</p>
                                <p className="text-neutral-800 text-lg max-w-sm leading-6 mt-3">I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.</p>
                            </div>
                            <div className="w-full max-w-[600px]">
                                <div className="flex justify-end mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><rect width="7.33" height="7.33" x="1" y="1" fill="#262626"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="#262626"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="#262626"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"/><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"/><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"/></rect></svg>
                                </div>
                                <ul className="flex flex-col gap-y-3 mt-20">
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">01</span>Landing Page</p>
                                    </li>
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">02</span>E-Commerce</p>
                                    </li>
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">03</span>Company Profil</p>
                                    </li>
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">04</span>Blog</p>
                                    </li>   
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">05</span>Custom Website</p>
                                    </li>   
                                </ul>
                            </div>
                        </div>
                        <div className="flex bg-white items-start justify-between border-t-[1px] border-black sticky top-56 z-10 pb-60">
                            <div className="w-full">
                                <p className="text-neutral-800 text-[58px] font-bold mt-2">SEO</p>
                                <p className="text-neutral-800 text-lg max-w-sm leading-6 mt-3">Beyond crafting visually memorable websites, I also optimize your online presence to elevate your visibility in search rankings so your voices can be heard in the digital landscape.</p>
                            </div>
                            <div className="w-full max-w-[600px]">
                                <div className="flex justify-end mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><rect width="2.8" height="12" x="1" y="6" fill="#262626"><animate id="svgSpinnersBarsScale0" attributeName="y" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="5.8" y="6" fill="#262626"><animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="10.6" y="6" fill="#262626"><animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="15.4" y="6" fill="#262626"><animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect width="2.8" height="12" x="20.2" y="6" fill="#262626"><animate id="svgSpinnersBarsScale1" attributeName="y" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect></svg>                                </div>
                                <ul className="flex flex-col gap-y-3 mt-20">
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">01</span>Technical SEO</p>
                                    </li>
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">02</span>On-Page Optimization</p>
                                    </li>
                                    <li>
                                        <p className="text-neutral-800 text-3xl font-bold flex gap-10 border-b-[1px] border-neutral-800 pb-3"><span className="text-2xl font-light">03</span>SEO Audits & Analysis</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}