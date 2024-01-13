import React from "react";
import Image from "next/image";
import waiter from "@/public/waiter.png";

import OpenIcon from "@/icons/openIcon.svg";
import GithubIcon from "@/icons/github.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KitchenHeadingSection() {
  return (
    <>
      <motion.div
        initial={{ x: "-10px", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="
      col-span-full  rounded-[1rem] bg-red-400 p-4 
      s60:order-1
      s60:col-span-full
     
      s45:text-[1.3rem]
      s60:text-[1.6rem]
      s80:text-[1.8rem] 
      
      s100:col-span-4 s100:row-span-3
      "
      >
        <h3 className="m-[1em] text-[1.3em] font-semibold">
          Restaurant management
        </h3>

        <div className=" float-right w-[7em]">
          <Image
            src={waiter}
            alt="outline of a waiter holding a tray with a glass on it"
            // style={{ objectFit: "cover" }}

            className="bg-waiterYellow...  rounded-[1rem] object-contain "
          />
        </div>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          transition={{ delay: .2, duration: 0.4 }}
        >
          <p className="mb-[1em] ml-[1em]">
            In a busy restaurant, speed and efficiency are the key to success.
          </p>

          <p className="mb-[1em] ml-[1em]">
            These point of sale and kitchen diplay apps facilitate communication
            and clarity between the front of house and the kitchen.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
