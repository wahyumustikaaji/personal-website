"use client";

import Image from "next/image";
import GradualSpacing from "../magicui/gradual-spacing";

const projects = [
    {
        title: "AETERNUM",
        description: "Blockchain, Web3",
        mainImage: "https://img.freepik.com/premium-photo/dark-green-color-block-brick-wall-texture-pattern-st-patrick-s-day-card-background-also-have-copy-space-text_685067-3709.jpg",
        overlayImage: "/images/projects/aeternum/aeternum.png",
        scrollSpeed: 3,
        link: "/aeternum",
    },
    {
        title: "PROJECTHUB",
        description: "Marketplace Project",
        mainImage: "https://png.pngtree.com/thumb_back/fw800/background/20231219/pngtree-blue-workplace-business-office-background-image_15522876.png",
        overlayImage: "/images/projects/projecthub/projecthub.png",
        scrollSpeed: 2,
        link: "#",
    },
    {
        title: "SOLUSI TERNAK",
        description: "AI, Farm",
        mainImage: "https://img.freepik.com/premium-photo/3d-illustration-agriculture-field-isolated-white-background-farming-concept_439318-585.jpg",
        overlayImage: "/images/projects/solusiternak/solusiternak.png",
        scrollSpeed: 2,
        link: "#",
    },
    {
        title: "PUSTAKA CERDAS",
        description: "Smart Library, AI",
        mainImage: "https://png.pngtree.com/background/20230424/original/pngtree-person-walking-in-a-red-library-hall-with-bookshelves-picture-image_2460379.jpg",
        overlayImage: "/images/projects/pustakacerdas/pustakacerdas.png",
        scrollSpeed: 2,
        link: "#",
    }
];

export default function Work() {
    return (
        <div className="relative z-40">
            <div className="px-16 pt-10">
                <GradualSpacing
                    className="text-[125px] text-[#F7F9F2] font-semibold"
                    text="SELECTED WORKS/"
                />
                <div className="w-full flex justify-end gap-10 mt-10 pr-20">
                    <p className="text-[#F7F9F2] text-xl font-normal">(Projects)</p>
                    <p className="text-[#F7F9F2] text-[22px] max-w-sm">
                        Featured client projects that have been meticulously crafted with passion and purpose over the years.
                    </p>
                </div>

                <div className="mt-24 pb-32">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-scroll
                            data-scroll-speed={project.scrollSpeed}
                            className={`flex items-end gap-16 mt-24 ${index % 2 === 1 ? "justify-end" : ""}`}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <div className="w-[800px] h-[500px] relative">
                                        <img className="rounded-[40px] w-full h-full object-cover" src={project.mainImage} alt="" />
                                        <div className="w-[700px] h-[350px] bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                                            <Image 
                                            src={project.overlayImage}
                                            alt="Website" 
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                            quality={100}
                                            priority
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <a href={project.link} className="text-[50px] text-[#F7F9F2] white-before">
                                            <GradualSpacing text={project.title} />
                                        </a>
                                        <p className="text-sm text-[#F7F9F2] uppercase mt-1">{project.description}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <a href={project.link} className="text-[50px] text-[#F7F9F2] white-before">
                                            <GradualSpacing text={project.title} />
                                        </a>
                                        <p className="text-sm text-[#F7F9F2] uppercase mt-1">{project.description}</p>
                                    </div>
                                    <div className="w-[800px] h-[500px] relative">
                                        <img className="rounded-[40px] w-full h-full object-cover" src={project.mainImage} alt="" />
                                        <div className="w-[700px] h-[350px] bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                                            <img className="rounded-lg w-full h-full object-cover" src={project.overlayImage} alt="" />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
