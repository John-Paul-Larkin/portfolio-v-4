"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoduSection() {
  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ x: "10%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mx-auto grid h-[48rem] max-w-container-width overflow-hidden rounded-[1rem] p-[1rem] s6:h-[30rem]"
      >
        <div className="relative flex h-full flex-col overflow-hidden  rounded-[1rem] bg-space s6:flex-row">
          <div className="h-[24rem] text-white">
            <h3 className="m-[1rem] text-3xl font-extrabold">Open Source</h3>
            <p className="m-[1rem]">
              Codú is Ireland`&apos;`s largest coding community. The perfect
              place to learn, contribute and network with like minded
              individuals.
            </p>
            <p className="m-[1rem]">
              The community afforded me the opportunity to actively participate
              in open source projects, delve into an unfamiliar codebase, and
              refine my skills in using Git.
            </p>
          </div>

          <div className="flex flex-col items-cente">
            <div className="relative h-[7rem] w-[80%] lg:w-[20rem]">
              <Image
                src="/codu.svg"
                fill={true}
                alt="codu logo"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="pt-[1rem] text-2xl font-extrabold  text-white">
              A{" "}
              <span className=" bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
                space
              </span>{" "}
              for coders
            </p>
            <div className="flex justify-center">
              <motion.div
                className="absolute bottom-[-7rem] aspect-square h-[18rem] s6:h-[20rem]"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: 2 }}
              >
                <Image
                  src="/moon.png"
                  fill={true}
                  alt="full moon"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
