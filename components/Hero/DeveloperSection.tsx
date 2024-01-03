import { motion } from "framer-motion";
import React from "react";
import LinkedIn from "@/icons/linkedin.svg";
import Github from "@/icons/github.svg";
import Email from "@/icons/email.svg";
import Phone from "@/icons/phone.svg";
import Arrows from "@/icons/arrows.svg";

export default function DeveloperSection() {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="bg-lilac relative rounded-[1rem] sm:row-span-1 flex"
    >
      <div className="bg-red-500... flex... grow">
        <div className="bg-slate-500... text-5xl font-bold">
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

        <motion.div
          initial={{ rotate: 20 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 2 }}
          className="flex grow items-center justify-around bg-blue-700"
        >
          <div>
            <Email className="h-12" />
            <Arrows className="rotate-180... h-14   w-12 p-2" />
            <Phone className="h-12" />
          </div>

          <div>
            <LinkedIn className="h-12 " />
            <Arrows className="h-14 w-12   rotate-180 p-2" />
            <Github className="h-12 " />
          </div>
        </motion.div>

      </div>

        <div
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          className="h-full...  rounded-[1rem] rounded-tr-none... bg-navy-100 p-4 text-2xl font-extrabold text-white "
        >
          Contact me
        </div>

    </motion.div>
  );
}
