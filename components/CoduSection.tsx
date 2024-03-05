import CoduIcon from "@/icons/codu.svg";
import moon from "@/public/moon.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function CoduSection() {
  return (
    <div className="  mt-[1rem] grid grid-cols-[repeat(8,1fr)] grid-rows-1 gap-4 overflow-hidden rounded-[2rem] bg-overall-bg p-[1rem] s85:mt-[2rem] s85:gap-[2rem] s85:p-[2rem]">
      <motion.div
        initial={{ x: "10px", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative col-span-full flex flex-col overflow-hidden rounded-[1rem]  bg-space s100:flex-row"
      >
        <div className="m-[1rem] text-white s85:pb-[1rem] s100:w-[50%] s130:ml-[2rem]">
          <motion.div
            initial={{ y: "10px", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -250px 0px" }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="paragraph-text mx-auto max-w-[30rem] s130:max-w-[40rem]"
          >
            <h3 className="p-[1em] text-4xl font-extrabold">Open Source</h3>
            <p>
              Codú is Ireland&apos;s largest coding community. The perfect place
              to learn, contribute and network with like minded individuals.
            </p>
            <p className="pt-[1em]">
              The community afforded me the opportunity to actively participate
              in open source projects, delve into an unfamiliar codebase, and
              refine my skills in using Git.
            </p>
            <p className="pt-[1em]">
              Check out my commits
              <a
                href="https://github.com/codu-code/codu/issues?q=is%3Aclosed+author%3AJohn-Paul-Larkin+repo%3Acodu-code%2Fcodu"
                className="bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent"
              >
                {" "}
                here{" "}
              </a>
              on gihub.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -250px 0px" }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col items-center s60:flex-row s60:justify-evenly s70:m-[1rem] s100:w-[50%]"
        >
          <div className="s120:flex s120:flex-col s120:items-center">
            <div className="flex justify-center  s70:pt-[1rem] s120:w-[20rem]">
              <CoduIcon className="h-[4rem] s120:h-[5rem]" />
            </div>

            <p className="pt-[1rem] text-2xl  font-extrabold text-white ">
              A{" "}
              <span className=" bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
                space
              </span>{" "}
              for coders
            </p>
          </div>

          <div className="s85:w-[10rem]... flex justify-center s120:w-auto">
            <motion.div
              className="relative top-[2rem] z-0 aspect-square h-[15rem] s60:left-[3rem] s100:h-[17rem] s120:left-0 s120:h-[19rem]"
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
                alt="full moon"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
