import { motion } from "framer-motion";
import React from "react";
import LinkedIn from "@/icons/linkedin.svg";
import Github from "@/icons/github.svg";
import Email from "@/icons/email.svg";
import Phone from "@/icons/phone.svg";
import Arrows from "@/icons/arrows.svg";

export default function ContactSection() {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="bg-lilac... relative flex rounded-[1rem] bg-gradient-to-r from-lilac-600 to-lilac-300 l:row-span-1  order-3 "
    >
      <div className="bg-red-500... flex grow flex-col">
        {/* <div className="bg-slate-500... text-5xl font-bold overflow-hidden">
          <div className="overflow-hidden ">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
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
              transition={{ delay: 0.4, duration: 0.6 }}
              className=""
            >
              Developer
            </motion.div>
          </div>
        </div> */}

        <motion.div
          initial={{ rotate: -45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: .5, ease:"easeIn" }}
          className="bg-blue-700.. flex grow items-center justify-around"
        >
          <div className="">
            <Email className="h-14" />
            <Arrows className=" h-14   w-12 p-3" />
            <Phone className="h-14" />
          </div>

          <div>
            <LinkedIn className="h-14 " />
            <Arrows className="h-14 w-12   rotate-180 p-3" />
            <Github className="h-14 " />
          </div>
        </motion.div>
      </div>

      <div
      
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        className="h-full...  rounded-tr-none... flex items-center justify-center rounded-[1rem] bg-navy-100 p-4 text-4xl font-extrabold text-white overflow-hidden"
      >
        <motion.h3
         initial={{ y: "100%" }}
         whileInView={{ y: "0%" }}
         viewport={{ once: true }}
         transition={{ delay: 0.4, duration: 0.6 }}
        >Contact me</motion.h3>
      </div>
    </motion.div>
  );
}
