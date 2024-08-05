"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface OpeningProps {
  onAnimationEnd: () => void;
}

export default function Opening({ onAnimationEnd }: OpeningProps) {
  useEffect(() => {
    const timer = setTimeout(onAnimationEnd, 1500); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="absolute inset-0 z-50 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ type: "tween", duration: 1 }}
      />
    </div>
  );
}
