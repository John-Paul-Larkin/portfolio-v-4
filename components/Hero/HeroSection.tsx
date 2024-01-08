import React from "react";
import HeroBannerName from "./HeroBannerName";
import Technologies from "./Technologies";
import PhotoSection from "./PhotoSection";
import ContactSection from "./ContactSection";
import SvgSection from "./SvgSection";
import AboutSection from "./AboutSection";
import CoduSection from "../CoduSection";

export default function HeroSection() {
  return (
    <section
      className="
       bg-yellow 

      mx-auto 

      grid 
      min-w-[280px] max-w-container-width
      rounded-[1rem]
      gap-[1rem]
    
    p-[1rem]
    
    s2:grid-cols-[1fr,1fr]
    
    
    s3:grid-cols-[repeat(8,1fr)]

    
    s5:gap-[2rem] 
    "
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <ContactSection />

      {/* <SvgSection /> */}

      <AboutSection />

      <CoduSection />
    </section>
  );
}
