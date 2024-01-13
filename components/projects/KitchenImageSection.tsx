import annoyedCustomer from "@/public/annoyedCustomer.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function KitchenImageSection() {
  return (
    <motion.div
      initial={{ x: "10px", opacity: 0 }}
      whileInView={{ x: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="relative col-span-full  overflow-hidden rounded-[1rem] bg-navy-300 s60:order-5 s100:order-2 s100:col-span-4 s100:row-span-3 "
    >
      <div className="flex h-full items-center overflow-hidden">
        <Image
          src={annoyedCustomer}
          priority={false}
          alt="Waiter standing over annoyed customer"
          className="object-cover s80:w-[90%] s100:h-[75%] s100:w-[100%] s140:h-[100%] s140:w-[90%]"
        />
      </div>
      <motion.p
        initial={{ y: "10px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true, margin: "0px 0px -400px 0px" }}
        className="absolute right-[.5rem] top-[.5rem] rounded-[1rem] border-2 border-navy-600 bg-bgCream p-[.3rem] text-[1rem] font-semibold leading-5 text-navy-600 drop-shadow-lg 
          s40:right-[1rem] s40:top-[1rem] s40:p-[.7rem] s40:text-[1.2rem] 
          s50:right-[1.4rem] s50:top-[1.4rem] s50:p-[.7rem] s50:text-[1.2rem] 
          s60:right-[2rem] s60:top-[2rem] s60:p-[1.5rem] s60:text-[1.3rem] 
          s70:right-[3rem] s70:top-[2rem] s70:p-[1.7rem] s70:text-[1.7rem] s70:leading-7"
      >
        What&apos;s taking
        <br /> so long?
      </motion.p>
    </motion.div>
  );
}
