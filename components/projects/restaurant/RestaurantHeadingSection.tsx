import waiter from "@/public/waiterOutline.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function RestaurantHeadingSection() {
  return (
    <motion.div
      initial={{ x: "-10px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="paragraph-text col-span-full rounded-[1rem] bg-red-400 p-4 s60:order-1 s60:col-span-full  s100:col-span-4 s100:row-span-3"
    >
      <h3 className="m-[1em] text-[1.3em] font-semibold">
        Restaurant management
      </h3>

      <div className=" float-right w-[7em]">
        <Image
          src={waiter}
          alt="outline of a waiter holding a tray with a glass on it"
          className="rounded-[1rem] object-contain"
        />
      </div>
      <motion.div
        initial={{ y: "10px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
        transition={{ delay: 0.3, duration: 0.4 }}
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
  );
}
