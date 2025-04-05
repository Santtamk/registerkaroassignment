import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import AnimateOnScroll from "./components/hook/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <AnimateOnScroll threshold={0.3}>
        <HeroSection />
      </AnimateOnScroll>
      <AnimateOnScroll threshold={0.3}>
        <OurServices />
      </AnimateOnScroll>
      <AnimateOnScroll threshold={0.3}>
        <Blog />
      </AnimateOnScroll>
      <AnimateOnScroll threshold={0.3}>
        <AboutUs />
      </AnimateOnScroll>
      <AnimateOnScroll threshold={0.3}>
        <ContactUs />
      </AnimateOnScroll>
    </>
  );
}
