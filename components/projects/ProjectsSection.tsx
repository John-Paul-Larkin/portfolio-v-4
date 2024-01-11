import React from "react";

import KitchenCarousel from "./KitchenCarousel";
import KitchenImageSection from "./KitchenImageSection";
import KitchenHeadingSection from "./KitchenHeadingSection";

export default function ProjectsSection() {
  return (
    <>
      <div
        className=" mt-[1rem]     
        rounded-[2rem] bg-overall-bg
        p-[1rem] 
        s5:mt-[2rem]
        s5:p-[2rem]"
      >
        <h2 className="w-fit rounded-[1rem] bg-navy-300 p-4 text-4xl font-extrabold text-white">
          Projects
        </h2>
      </div>




      <section
        className=" 
          mb-[100rem] mt-[1rem]

        grid grid-cols-[repeat(8,1fr)]
        grid-rows-[auto,auto,auto,repeat(2,1fr)]
s3:grid-rows-[auto,auto,repeat(2,1fr)]
s6:grid-rows-[auto,auto,auto,auto,auto]

        gap-[1rem] 
        rounded-[2rem]
        bg-overall-bg
      
        p-[1rem] 
       s5:mt-[2rem]
       s5:gap-[2rem]
       s5:p-[2rem]
      "
      >
        <KitchenHeadingSection />
        <KitchenImageSection />
        <KitchenCarousel />
      </section>
    </>
  );
}

