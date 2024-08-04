import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Offer from "@/components/offer";
import Footer from "@/components/footer";
import Example from "@/components/horizontalScroll";
import Work from "@/components/work";
import Velocity from "@/components/velocityScroll";
import HelpYou from "@/components/help";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Example/>
    <Work/>
    <Velocity/>
    <About/>
    <HelpYou/>
    <Offer/>
    <Footer/>
    </>
  );
}
