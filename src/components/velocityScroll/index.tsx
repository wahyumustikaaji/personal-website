"use client";
 
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Velocity() {

    return(
        <div className="mb-40">
            <div className="bg-black">
                <VelocityScroll
                    text="ECOMMERCE · LANDING PAGE · PORTFOLIO · WEB3 ·"
                    default_velocity={1}
                    className="font-display text-center italic text-9xl leading-none py-8 font-bold tracking-[-0.02em] text-white dark:text-white"
                />
            </div>
        </div>
    )
}