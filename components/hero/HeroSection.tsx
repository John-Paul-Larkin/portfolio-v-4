import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroBannerName from "./HeroBannerName";
import PhotoSection from "./PhotoSection";
import Technologies from "./Technologies";

export default function HeroSection() {
  return (
    <section
      className=" grid gap-[1rem] rounded-[2rem] bg-overall-bg p-[1rem] mt-4
      s45:grid-cols-[1fr,1fr] s60:grid-cols-[repeat(8,1fr)] s80:gap-[2rem] s80:p-[2rem]"
    >
      <HeroBannerName />

      <Technologies />

      <PhotoSection />

      <ContactSection />

      <AboutSection />
    </section>
  );
}
