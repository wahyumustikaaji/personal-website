"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  card: {
    url: string;
    title: string;
    id: number;
  };
}

const HorizontalScroll = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pl-20">
        <motion.div style={{ x }} className="flex gap-10">
        <div className="flex justify-center flex-col pr-60">
            <p className="text-black text-[50px] font-semibold">Work</p>
            <p className="text-black text-[22px] leading-8 max-w-[260px]">A selection of works, created from scratch by a talented team.</p>
            <button
                className="group overflow-hidden relative border-[1px] border-black rounded-full w-[200px] py-3.5 text-lg font-medium mt-40"
                >
                <div>
                    <span>View More</span>
                </div>
                <div className="absolute w-full h-full bg-black text-white translate-y-[15px] group-hover:-translate-y-[41.5px] flex justify-center items-center duration-500 transition-all ease-in-out">
                    Let's Go
                </div>
            </button>
        </div>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        <div className="flex items-center justify-center flex-col pl-40">
            <p className="text-black text-[50px] font-semibold whitespace-nowrap">View More</p>
            <button
                className="group overflow-hidden relative border-[1px] border-black rounded-full w-[200px] py-3.5 text-lg font-medium mt-8"
                >
                <div>
                    <span>Let's Go</span>
                </div>
                <div className="absolute w-full h-full bg-black text-white translate-y-[15px] group-hover:-translate-y-[41.5px] flex justify-center items-center duration-500 transition-all ease-in-out">
                    Let's Go
                </div>
            </button>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[700px] overflow-hidden bg-neutral-200 rounded-[30px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
