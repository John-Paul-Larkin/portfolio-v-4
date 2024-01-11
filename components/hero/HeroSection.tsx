import React from "react";
import HeroBannerName from "./HeroBannerName";
import Technologies from "./Technologies";
import PhotoSection from "./PhotoSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";

export default function HeroSection() {
  return (
    <section
      className=" s45:grid-cols-[1fr,1fr]    
      s60:grid-cols-[repeat(8,1fr)] s80:gap-[2rem] s80:p-[2rem] grid
      gap-[1rem] rounded-[2rem] bg-overall-bg p-[1rem]"
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <ContactSection />

      <AboutSection />
    </section>
  );
}
