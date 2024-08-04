"use client";

import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '500',
});
interface LinkProps {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

export const HoverImageLinks: React.FC = () => {
  return (
    <section className="">
      <div className="w-full rounded-t-[40px]">
        <div className="max-w-5xl mx-auto">
            <Link
            heading="01 Technical SEO"
            subheading="Learn what we do here"
            imgSrc="/imgs/random/11.jpg"
            href="#"
            />
            <Link
            heading="02 On-Page Optimization"
            subheading="We work with great people"
            imgSrc="/imgs/random/6.jpg"
            href="#"
            />
            <Link
            heading="03 SEO Audits & Analysis"
            subheading="Our work speaks for itself"
            imgSrc="/imgs/random/4.jpg"
            href="#"
            />
        </div>
      </div>
    </section>
  );
};

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div>
        <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-[1px] border-neutral-700 transition-colors duration-500 hover:border-neutral-50 py-3"
        >
        <div>
            <motion.span
            variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
            }}
            transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
            }}
            className="relative z-10 block text-3xl font-bold text-neutral-700 transition-colors duration-500 group-hover:text-black"
            >
            {heading.split("").map((l, i) => (
                <motion.span
                variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
                >
                {l}
                </motion.span>
            ))}
            </motion.span>
        </div>

        <motion.img
            style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
            }}
            variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            src={imgSrc}
            className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
            alt={`Image representing a link for ${heading}`}
        />

        <motion.div
            variants={{
            initial: {
                x: "25%",
                opacity: 0,
            },
            whileHover: {
                x: "0%",
                opacity: 1,
            },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
        >
        </motion.div>
        </motion.a>
    </div>
  );
};
