"use client";

import CoduSection from "@/components/CoduSection";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className=" min-h-screen bg-box-bg  mx-auto min-w-[280px] max-w-container-width">
      <HeroSection />
      <CoduSection />

    </main>
  );
}
