import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <Blog />
    </>
  );
}
