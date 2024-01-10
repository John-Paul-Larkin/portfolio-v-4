import React from "react";
import HeroBannerName from "./HeroBannerName";
import Technologies from "./Technologies";
import PhotoSection from "./PhotoSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";

export default function HeroSection() {
  return (
    <section
      className=" grid    
      gap-[1rem] rounded-[2rem] bg-overall-bg p-[1rem]
      s2:grid-cols-[1fr,1fr] s3:grid-cols-[repeat(8,1fr)] s5:gap-[2rem] s5:p-[2rem]"
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <ContactSection />

      <AboutSection />

    </section>
  );
}
