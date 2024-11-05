"use client";
import { motion } from "framer-motion";

export default function Navbar({ textColor = "text-[#171010]", bgColor = "" }) {
  return (
    <div data-scroll className="bg-transparant w-full px-16 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-40">
          <button className={`font-extrabold leading-4 text-xl ${textColor}`}>
            WAHYUAJI <br /> PORTFOLIO
          </button>
          <p className={`font-medium ${textColor} text-lg flex items-center gap-2`}>
            Available for work 
            <span className="relative flex items-center justify-center h-2.5 w-2.5 mt-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </p>
        </div>
        <div className="flex items-center gap-32">
          <div className="flex items-center gap-1">
            <a href="/" className={`text-lg ${textColor} ${bgColor} font-medium`}>
              Home,
            </a>
            <a href="/about" className={`text-lg ${textColor} ${bgColor} font-medium`}>
              About,
            </a>
            <a href="/projects" className={`text-lg ${textColor} ${bgColor} font-medium`}>
              Projects
            </a>
          </div>
          <a href="mailto:wahyuma123@gmail.com" className={`text-lg ${textColor} ${bgColor} font-medium`}>
            wahyuma123@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
