import { FadeText } from "../magicui/fade-text";
import { Brands } from "../marquee";

export default function Journey() {
    return(
        <div className="2xl:mx-auto 2xl:container w-full">
            <div className="w-full flex items-center justify-center h-screen pl-12 pr-20 mt-10">
                <div className="w-full flex items-start justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16"><path fill="black" fill-rule="evenodd" d="M9.82 5.116a.5.5 0 0 0-.704.704l.064.064L11.719 8l-2.54 2.116a.5.5 0 0 0-.114.63l.05.074a.5.5 0 0 0 .63.115l.075-.05l3-2.5a.5.5 0 0 0 .071-.697l-.07-.072zm-3.64 0a.5.5 0 0 1 .704.704l-.064.064L4.281 8l2.54 2.116a.5.5 0 0 1 .114.63l-.05.074a.5.5 0 0 1-.63.115l-.075-.05l-3-2.5a.5.5 0 0 1-.071-.697l.07-.072z"/></svg>
                    <div className="flex flex-col items-start w-[65rem]">
                        <div>
                            <p className="text-6xl text-black leading-[65px] font-medium">Your journey is short because<br/> ours was long.</p>
                            <p className="text-xl text-black opacity-60 font-medium mt-12">My frontend development expertise is the result of years of dedicated<br/> practice, building dynamic and responsive websites for diverse<br/> clients. I excel in crafting exceptional digital experiences that capture<br/> attention and deliver results.</p>
                        </div>
                        <div className="flex flex-col justify-end w-full mt-20">
                            <Brands/>
                            <div className="flex justify-between items-center w-full mt-8">
                                <FadeText 
                                direction="up" 
                                framerProps={{show: {transition: {delay: 0.5}}}} 
                                className="text-xs text-gray-700" 
                                text="2022" 
                                />
                                <FadeText 
                                direction="up" 
                                framerProps={{show: {transition: {delay: 0.8}}}} 
                                className="text-xs text-gray-700" 
                                text="Now" 
                                />
                            </div>
                            <div className="relative mt-2">
                                <div className="border-t-[2px] border-gray-500"></div>
                                <div className="w-2 h-2 bg-gray-500 absolute left-0 -bottom-[3px]"></div>
                                <div className="w-2 h-2 bg-gray-500 absolute right-0 -bottom-[3px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}