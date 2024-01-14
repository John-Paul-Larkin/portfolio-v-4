import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function WarehouseHeadingSection() {
  return (
    <motion.div
      initial={{ x: "-10px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="paragraph-text s100:max-h-[44rem]...  col-span-full rounded-[1rem] bg-green p-4  s60:col-span-full s100:col-span-4
      s100:row-span-2
      "
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
        <div className="flex justify-center">
          <div className="flex w-[4em] justify-between ">
            <Link
              href="https://wim-front-end.netlify.app/"
              target="_blank"
              aria-label="link to live version of warehouse app"
            >
              <div className="btn-hover">
                <OpenIcon className="w-[.8em]" />
              </div>
            </Link>

            <Link
              href="https://github.com/Fishamble/wim_back_end"
              target="_blank"
              aria-label="link to github of warehouse project"
            >
              <div className="btn-hover">
                <GithubIcon className="w-[.8em] " />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
