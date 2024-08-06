"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05),
      },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.75 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center" ref={containerRef}>
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          custom={i}
          className={cn(
            "font-display text-center text-[130px] leading-[120px] font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
