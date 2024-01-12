import React from "react";

import KitchenCarousel from "./KitchenCarousel";
import KitchenImageSection from "./KitchenImageSection";
import KitchenHeadingSection from "./KitchenHeadingSection";

export default function ProjectsSection() {
  return (
    <>
      <div
        className=" s80:mt-[2rem] s80:p-[2rem] mt-[1rem]
        rounded-[2rem] 
        bg-overall-bg
        p-[1rem]"
      >
        <h2 className="w-fit... rounded-[1rem] bg-navy-300 p-4 text-4xl font-extrabold text-white">
          Projects
        </h2>
      </div>

      <section
        className=" 
        
        s80:mt-[2rem] s80:gap-[2rem]
        s80:p-[2rem]
        mb-[100rem]
        
        grid-rows-[auto,auto,auto,auto,auto]
        s60:grid-rows-[auto,auto,repeat(2,1fr)] 
        s70:grid-rows-[repeat(3,auto)]
   
        
        mt-[1rem]
        grid 
        grid-cols-[repeat(8,1fr)]
      
        gap-[1rem] 
       rounded-[2rem]
       bg-overall-bg
       p-[1rem]
      "
      >
        <KitchenHeadingSection />
        <KitchenImageSection />
        <KitchenCarousel />
      </section>
    </>
  );
}
