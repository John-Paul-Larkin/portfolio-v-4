"use client";

import { MotionConfig } from "framer-motion";

import CoduSection from "@/components/CoduSection";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className=" mx-auto  min-h-screen min-w-[280px] max-w-container-width">
        <HeroSection />
        <CoduSection />
        <ProjectsSection />
      </main>
    </MotionConfig>
  );
}
