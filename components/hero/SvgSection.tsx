import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function SvgSection() {
  return (
    <div className="s60:col-span-2 relative overflow-hidden rounded-[1rem]">
      <motion.div
        initial={{ x: "10px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="bg-navy relative h-full w-full"
      >
        <Image
          src="/undraw_programming_2svr.svg"
          fill={true}
          alt="man sitting in front of multiple monitors"
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </motion.div>
    </div>
  );
}
