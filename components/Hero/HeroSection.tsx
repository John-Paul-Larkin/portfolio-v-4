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
      s2:grid-cols-[1fr,1fr] s2:grid-rows-[repeat(5)] 

      s2:gap-[1rem] 

      s4:grid-cols-[1fr,1fr,auto,auto] 
    s6:grid-cols-[1fr,1fr,1fr,1fr]

    s4:grid-rows-threeBox 
    
    s5:gap-[2rem]
    
    mx-auto
    
    bg-yellow
    




    grid
    max-w-container-width
 
    rounded-[1rem] 
    p-[1rem]
    
    "
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <ContactSection />

      {/* <SvgSection /> */}

      <AboutSection />
    </section>
  );
}
