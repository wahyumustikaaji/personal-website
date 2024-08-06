"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Offer from "@/components/offer";
import Footer from "@/components/footer";
import Work from "@/components/work";
import Velocity from "@/components/velocityScroll";
import HelpYou from "@/components/help";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Work/>
    <Velocity/>
    <div className="relative">
      <About/>
      <HelpYou/>
    </div>
    <Offer/>
    <Footer/>
    </div>
  );
}
