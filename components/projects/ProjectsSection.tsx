import React from "react";

import KitchenCarousel from "./KitchenCarousel";
import KitchenHeadingSection from "./KitchenHeadingSection";
import KitchenImageSection from "./KitchenImageSection";

export default function ProjectsSection() {
  return (
    <>
      <div className=" mt-[1rem] rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:p-[2rem]">
        <h2 className="rounded-[1rem] bg-navy-100 p-4 text-4xl font-extrabold text-white">
          Projects
        </h2>
      </div>

      <section
        className="mb-[100rem] mt-[1rem] grid grid-cols-[repeat(8,1fr)] grid-rows-[repeat(3,auto)] gap-[1rem] 
        rounded-[2rem] bg-overall-bg p-[1rem] s60:grid-rows-[auto,auto,repeat(2,1fr)] s70:grid-rows-[repeat(3,auto)] s80:mt-[2rem] s80:gap-[2rem] s80:p-[2rem]"
      >
        <KitchenHeadingSection />
        <KitchenImageSection />
        <KitchenCarousel />
      </section>
    </>
  );
}
