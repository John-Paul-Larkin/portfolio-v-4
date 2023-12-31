import React from "react";
import HeroBannerName from "@/components/HeroBannerName";
import Technologies from "@/components/Technologies";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-container-width grid-cols-4 grid-rows-threeBox gap-[2rem] rounded-[1rem] p-[1rem] ">
      <HeroBannerName />

      <div className="col-span-2 row-span-2 overflow-hidden rounded-[1rem]">
        <motion.div
          initial={{ x: "0%", opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="h-full w-full"
        >
          <Technologies />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="relative row-span-1 overflow-hidden   rounded-[1rem]"
      >
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
        className="relative row-span-1 rounded-[1rem] bg-cream"
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

      <div className=" relative col-span-2 overflow-hidden rounded-[1rem]">
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
  );
}
