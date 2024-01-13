import Arrows from "@/icons/arrows.svg";
import Email from "@/icons/email.svg";
import Github from "@/icons/github.svg";
import LinkedIn from "@/icons/linkedin.svg";
import Phone from "@/icons/phone.svg";
import { motion } from "framer-motion";
import React from "react";

export default function ContactSection() {
  return (
    <motion.div
      initial={{ x: "10px", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative order-3 flex rounded-[1rem] bg-gradient-to-r from-lilac-600  to-lilac-300 s60:col-span-3 s80:col-span-1 s100:col-span-2"
    >
      <div className=" flex grow flex-col overflow-hidden">
        <motion.div
          initial={{ rotate: -45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeIn" }}
          className="flex grow items-center justify-around"
        >
          <div className="">
            <Email className="h-14 s80:h-10 s100:h-14" />
            <Arrows className=" h-14 w-12 p-3   s80:h-10 s100:h-14" />
            <Phone className="h-14 s80:h-10 s100:h-14" />
          </div>

          <div>
            <LinkedIn className="h-14 s80:h-10 s100:h-14 " />
            <Arrows className="h-14 w-12 rotate-180 p-3 s80:h-10 s100:h-14" />
            <Github className="h-14 s80:h-10 s100:h-14 " />
          </div>
        </motion.div>
      </div>

      <div
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        className="flex items-center justify-center overflow-hidden rounded-[1rem] bg-navy-100 p-4 text-4xl font-extrabold text-white s80:text-2xl s100:text-4xl"
      >
        <motion.h3
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Contact me
        </motion.h3>
      </div>
    </motion.div>
  );
}
