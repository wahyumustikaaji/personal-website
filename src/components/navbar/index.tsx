"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      id="top"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 10, duration: 1, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="bg-transparant w-full px-16 py-8 absolute top-0 z-40">
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
    </motion.nav>
  );
}
