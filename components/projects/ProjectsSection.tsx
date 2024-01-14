import React from "react";

import stockTake from "@/public/stockTake.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import KitchenCarousel from "./restaurant/RestaurantCarousel";
import KitchenHeadingSection from "./restaurant/RestaurantHeadingSection";
import KitchenImageSection from "./restaurant/RestaurantImageSection";
import WarehouseHeadingSection from "./warehouse/WarehouseHeadingSection";

export default function ProjectsSection() {
  return (
    <>
      <div className=" mt-[1rem] overflow-hidden rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:p-[2rem]">
        <motion.h2
          initial={{ x: "-10px", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="rounded-[1rem] bg-navy-100 p-4 text-4xl font-extrabold text-white"
        >
          Projects
        </motion.h2>
      </div>

      <section
        className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] grid-rows-[repeat(3,auto)] gap-[1rem] 
        rounded-[2rem] bg-overall-bg p-[1rem] s60:grid-rows-[auto,auto,repeat(2,1fr)] s70:grid-rows-[repeat(3,auto)] s80:mt-[2rem] s80:gap-[2rem] s80:p-[2rem]"
      >
        <KitchenHeadingSection />
        <KitchenImageSection />
        <KitchenCarousel />
      </section>

      <section
        className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
        rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem] "
      >
        <WarehouseHeadingSection/>
        <div className="col-span-full flex h-full w-full justify-end  overflow-hidden rounded-[1rem] bg-slate-700">
          <Image
            src={stockTake}
            priority={false}
            alt="Man with clipboard counting stock items"
            className="object-cover"
          />
        </div>
      </section>

      <section
        className="mb-[100rem]  mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
        rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem] "
      >
        <div className="col-span-4 h-[50rem] bg-red-500"></div>
      </section>
    </>
  );
}
