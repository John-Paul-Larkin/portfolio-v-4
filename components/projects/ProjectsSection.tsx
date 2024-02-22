import stockTake from "@/public/stockTake.webp";
import spaceTourism from "@/public/spaceTourism.png";
import wim from "@/public/wim.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import KitchenCarousel from "./restaurant/RestaurantCarousel";
import KitchenHeadingSection from "./restaurant/RestaurantHeadingSection";
import KitchenImageSection from "./restaurant/RestaurantImageSection";
import WarehouseHeadingSection from "./warehouse/WarehouseHeadingSection";
import Link from "next/link";
import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";

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
        rounded-[2rem] bg-overall-bg p-[1rem] s60:grid-rows-[auto,auto,auto] s70:grid-rows-[repeat(3,auto)] s80:mt-[2rem] s80:gap-[2rem] s80:p-[2rem]"
      >
        <KitchenHeadingSection />
        <KitchenImageSection />
        <KitchenCarousel />
      </section>

      <section
        className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
        rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem] 
        
        s130:grid-rows-[minmax(100px,22rem)_minmax(100px,22rem)]
       

        "
      >
        <WarehouseHeadingSection />
        <div className="col-span-full flex h-full w-full justify-end  overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4">
          <Image
            src={stockTake}
            alt="Man with clipboard counting stock items"
            className="object-cover"
          />
        </div>

        <div className="s100:object-contain... col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4">
          <Image
            src={wim}
            alt="landing page of wim app, with vaious charts and metrics"
            className="object-contain"
          />
        </div>
      </section>

      <section
        className="mb-[100rem]  mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
        rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem]  "
      >
        <div className="col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4">
          <Image
            src={spaceTourism}
            alt="space tourism with the a picture of the  moon"
            className="object-cover"
          />
        </div>
        <div className="h-[30rem]... paragraph-text col-span-4 bg-red-500 rounded-[1rem]">
          <h3 className="m-[1em] text-[1.3em] font-semibold">Space Tourism</h3>
          <p className="mx-[1em] mb-[1em]">
            This is my interpretation of a frontend mentor challenge, which you
            can find here.
            {/* The challenge is to build out a multi-page space
            tourism website and get it looking as close to the design as
            possible. I aimed for a pixel perfect duplication of the provided
            figma design files, which include designs for mobile, tablet and
            desktop. Project built with Next.js, TypeScript, Swiper.js. */}
          </p>
          <p className="mx-[1em] mb-[1em]">
            I aimed for a pixel perfect duplication of the provided figma design
            files, which include designs for mobile, tablet and desktop.
          </p>

          <div className="flex justify-center">
            <div className="flex w-[4em] justify-between ">
              <Link
                href="https://wim-front-end.netlify.app/"
                target="_blank"
                aria-label="link to live version of warehouse app"
              >
                <div className="btn-hover">
                  <OpenIcon className="w-[.8em]" />
                </div>
              </Link>

              <Link
                href="https://github.com/John-Paul-Larkin/wim_back_end"
                target="_blank"
                aria-label="link to github of warehouse project"
              >
                <div className="btn-hover">
                  <GithubIcon className="w-[.8em] " />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
