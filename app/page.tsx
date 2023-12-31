"use client";

import CoduSection from "@/components/CoduSection";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className=" min-h-screen bg-overall-bg">
      <HeroSection />
      <CoduSection />

      {/* <section className="min-h-screen... mx-auto mt-[2rem] grid max-w-container-width rounded-[1rem] bg-overall-bg p-[2rem]">
        <div className=" m-[2rem] h-[50rem] rounded-[1rem] bg-white ">
          <TreeAndRoots />
        </div>
      </section> */}
      {/* <a href="http://localhost:3000/">Visit W3Schools</a> */}
    </main>
  );
}
