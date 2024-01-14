"use client";

import CoduSection from "@/components/CoduSection";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className=" min-h-screen  mx-auto min-w-[280px] max-w-container-width">
      {/* <HeroSection /> */}
      {/* <CoduSection /> */}
      <ProjectsSection/>
    </main>
  );
}
