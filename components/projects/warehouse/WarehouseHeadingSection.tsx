import { motion } from "framer-motion";
import React from "react";

export default function WarehouseHeadingSection() {
  return (
    <motion.div
      initial={{ x: "-10px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="paragraph-text col-span-full rounded-[1rem] bg-green p-4 s60:order-1 s60:col-span-full  s100:col-span-4 s100:row-span-3"
    >
      <h3 className="m-[1em] text-[1.3em] font-semibold">
        Warehouse inventory app
      </h3>

      <motion.div
        initial={{ y: "10px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <p className="mb-[1em] ml-[1em]">
          Stock taking is an essential undertaking for any profitable business.
        </p>

        <p className="mb-[1em] ml-[1em]">
          This app allows for the monitoring of individual inventory items.
          Users input sales and purchases and stock levels are automatically
          adjusted as orders are placed, picked and delivered.
        </p>
        <p className="mb-[1em] ml-[1em]">
          My objectives for this project were to build a Node.js API that
          integrated with a MySQL database, and ultimately deploy it to a Linux
          server.
        </p>
      </motion.div>
    </motion.div>
  );
}
