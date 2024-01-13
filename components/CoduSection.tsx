"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import moon from "@/public/moon.png";
import CoduIcon from "@/icons/codu.svg";

export default function CoduSection() {
  return (
    <div
      className="  s85:mt-[2rem] s85:gap-[2rem] s85:p-[2rem]

     mt-[1rem] grid grid-cols-[repeat(8,1fr)] grid-rows-1  gap-4  overflow-hidden 
      rounded-[2rem]   bg-overall-bg p-[1rem]"
    >
      <Codu />

      {/* <motion.div
        initial={{ x: "10px", y: "10px", opacity: 0 }}
        whileInView={{ x: "0%", y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="col-span-full min-h-[20rem] rounded-[1rem] bg-white s85:col-span-3"
      ></motion.div> */}
    </div>
  );
}

function Codu() {
  return (
    <div className="relative col-span-full flex flex-col overflow-hidden rounded-[1rem]  bg-space s60:flex-row">
      <div className=" m-[1rem] text-white s100:w-[50%] bg-yellow-300...">
        <div className="mx-auto max-w-[30rem]
         s70:text-[1.3rem]
         s120:text-[1.5rem]
        
        ">
          <h3 className=" p-[1em] text-4xl font-extrabold">Open Source</h3>
          <p className="">
            Codú is Ireland&apos;s largest coding community. The perfect place
            to learn, contribute and network with like minded individuals.
          </p>
          <p className="pt-[1em]">
            The community afforded me the opportunity to actively participate in
            open source projects, delve into an unfamiliar codebase, and refine
            my skills in using Git.
          </p>
          <p className="pt-[1em]">
            Check out my commits
            <a href="https://github.com/codu-code/codu/issues?q=is%3Aclosed+author%3Afishamble+repo%3Acodu-code%2Fcodu">
              {" "}
              here{" "}
            </a>
            on gihub.
          </p>
        </div>
      </div>

      <div className="s85:flex-row flex flex-col items-center s60:m-[1rem] bg-yellow-300... s100:w-[50%] s100:justify-evenly">
        <div className="s120:flex s120:flex-col s120:items-center">
          <div className="s85:w-[15rem] s120:w-[20rem] flex  justify-center s60:pt-[1rem]">
            <CoduIcon className="h-[4rem] s120:h-[5rem]" />
          </div>

          <p className="s85:w-[15rem] pt-[1rem] text-2xl  font-extrabold text-white ">
            A{" "}
            <span className=" bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
              space
            </span>{" "}
            for coders
          </p>
        </div>

        <div className="bg-yellow-300... s85:w-[10rem] flex justify-center s100:w-auto">
          <motion.div
            className="s85:left-[3rem] relative top-[2rem] z-0 aspect-square h-[15rem] s100:left-0 "
            initial={{ rotate: 0, x: "0px", y: 0 }}
            whileInView={{ rotate: 360, x: "0px", y: "0px" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
              // repeatType: "mirror",
            }}
          >
            <Image
              src={moon}
              // fill={true}
              alt="full moon"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
