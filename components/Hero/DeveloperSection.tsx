import { motion } from "framer-motion";
import React from "react";

export default function DeveloperSection() {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="relative rounded-[1rem] bg-cream sm:row-span-1"
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
  );
}
