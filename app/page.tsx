"use client";

import HeroBannerName from "@/components/HeroBannerName";
import Technologies from "@/components/Technologies";
import TreeAndRoots from "@/components/TreeAndRoots";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-overall-bg... ">
      {/* <div className=" m-[2rem] mx-auto mt-0 max-w-container-width  rounded-[1rem] bg-overall-bg p-[2rem]">
        <div className="h-[6rem] w-full rounded-[1rem] bg-box-bg"></div>
      </div> */}

      {/* <section className="min-h-screen... mx-auto grid max-w-container-width grid-cols-4 grid-rows-3 gap-[2rem] rounded-[1rem] bg-overall-bg p-[2rem]">
       */}
      <section className="min-h-screen... bg-overall-bg... mx-auto grid max-w-container-width grid-cols-4 grid-rows-threeBox gap-[2rem] rounded-[1rem] p-[1rem] ">
        <HeroBannerName />

        <div className="bg-red-400... col-span-2 row-span-2 overflow-hidden rounded-[1rem]">
          <motion.div
            // initial={{ x: "0%", opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ delay: 0, duration: 0.4 }}
            initial={{ x: "0%", opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className=" pt-[50%]... relative... h-full w-full"
          >
            <Technologies />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="pt-[100%]... bg-red-400... relative row-span-1 overflow-hidden   rounded-[1rem]"
        >
          {/* <div className="absolute left-0 top-0"></div> */}

          <Image
            src="/wrangler.png"
            // height={4864}
            // width={3648}
            fill={true}
            alt="JP Larkin stading in front of computer"
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </motion.div>

        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="pt-[100%]... relative row-span-1 rounded-[1rem] bg-cream"
        >
          <div className="text-5xl font-bold">
            <div className="overflow-hidden ">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className=""
              >
                React
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className=""
              >
                Developer
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="row-span- bg-blue-300... relative col-span-2 overflow-hidden rounded-[1rem]">
          <motion.div
            initial={{ x: "10%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className=" pt-[100%]... bg-navy relative h-full w-full"
          >
            <Image
              src="/undraw_programming_2svr.svg"
              // height={4864}
              // width={3648}
              fill={true}
              alt="man sitting in front of multiple monitors"
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-container-width overflow-hidden rounded-[1rem] p-[1rem] h-[30rem]">
        <div className="bg-space rounded-[1rem] h-full relative">
          

        <Image
              src="/moon.png"
              // height={4864}
              // width={3648}
              fill={true}
              alt="man sitting in front of multiple monitors"
              style={{ objectFit: "cover" }}
              priority={true}
            />










        </div>
      </section>

      {/* <section className="min-h-screen... mx-auto mt-[2rem] grid max-w-container-width rounded-[1rem] bg-overall-bg p-[2rem]">
        <div className=" m-[2rem] h-[50rem] rounded-[1rem] bg-white ">
          <TreeAndRoots />
        </div>
      </section> */}
      <a href="http://localhost:3000/">Visit W3Schools</a>
    </main>
  );
}
