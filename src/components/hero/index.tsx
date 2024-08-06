"use client";

import { Kanit } from "next/font/google";
import BoxReveal from "@/components/magicui/box-reveal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

const Hero: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleButton, setVisibleButton] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1800);
   
    const timerButton = setTimeout(() => {
      setVisibleButton(true);
    }, 1200);

    return () => 
        clearTimeout(timer);
        clearTimeout(timerButton);
  }, []);

  return (
    <div className="2xl:mx-auto px-16 h-screen flex flex-col justify-center items-start relative">
      <div className="flex items-center justify-center w-full gap-10 relative">
        <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{ease: [0.6, 0.01, -0.05, 0.95], duration: 1.5, delay: 1.5}}
        className="transition-opacity w-[100px] h-[100px] rounded-full gradient-background">
        </motion.div>
        <div className={kanit.className}>
          <BoxReveal duration={0.8}>
            <p className="font-bold text-[140px] text-black leading-none">
              WAHYU AJI</p>
          </BoxReveal>
        </div>
      </div>
      <div className="flex items-center justify-evenly w-full">
        <div className={kanit.className}>
            <BoxReveal duration={0.8}>
              <p className="font-bold text-[140px] text-black leading-none">FRONTEND</p>
            </BoxReveal>
        </div>
          <p className={`transition-opacity text-black font-medium text-lg font-sans duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            With directed art guidance and web<br/> design, I support global companies<br/> in expanding their business.
          </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className={kanit.className}>
          <BoxReveal duration={0.8}>
            <p className="font-bold text-[140px] text-black leading-none">DEVELOPER</p>
          </BoxReveal>
        </div>
      </div>
        <div className={`transition-opacit mt-12 duration-1000 flex items-center justify-center w-full ${visibleButton ? 'opacity-100' : 'opacity-0'}`}>
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
  );
};

export default Hero;
