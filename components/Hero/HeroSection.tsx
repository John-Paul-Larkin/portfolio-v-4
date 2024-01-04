import React from "react";
import HeroBannerName from "./HeroBannerName";
import Technologies from "./Technologies";
import PhotoSection from "./PhotoSection";
import ContactSection from "./ContactSection";
import SvgSection from "./SvgSection";
import AboutSection from "./AboutSection";

export default function HeroSection() {
  return (
    <section
      className="
    
    mx-auto 
    
    grid max-w-container-width 
    

    m:grid-cols-[repeat(2,50%)] m:grid-rows-[repeat(5)] 

    sm:grid-rows-threeBox sm:gap-[2rem] 


    m:gap-[1rem]
    rounded-[1rem]
 
    p-[1rem] sm:grid-cols-4 
    
    "
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <ContactSection />

      {/* <SvgSection /> */}

      <AboutSection/>
    </section>
  );
}
