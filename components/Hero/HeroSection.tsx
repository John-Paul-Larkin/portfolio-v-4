import React from "react";
import HeroBannerName from "./HeroBannerName";
import Technologies from "./Technologies";
import PhotoSection from "./PhotoSection";
import DeveloperSection from "./DeveloperSection";
import SvgSection from "./SvgSection";


export default function HeroSection() {
  return (
    <section
      className="
    
    mx-auto grid max-w-container-width grid-cols-[repeat(2)] grid-rows-[repeat(5)] 
    gap-[1rem]
    rounded-[1rem]
 
    p-[1rem] sm:grid-cols-4 
    sm:grid-rows-threeBox sm:gap-[2rem] 
    
    "
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <DeveloperSection />

      <SvgSection />
    </section>
  );
}
