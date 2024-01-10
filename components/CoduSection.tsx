"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import moon from '@/public/moon.png'

export default function CoduSection() {
  return (
    <>
      {/* <div
      className=" order-5 mt-[1rem]
    gap-[1rem] overflow-hidden rounded-[2rem] bg-overall-bg
    
    p-[1rem] s2:col-span-2 s4:col-span-6 s5:mt-[2rem] s5:gap-[2rem] s5:p-[2rem] s6:col-span-4"
    > */}

      <div
        className="  mt-[1rem]
     grid grid-cols-[repeat(8,1fr)] grid-rows-1 gap-4  overflow-hidden  rounded-[2rem] 
      bg-overall-bg p-[1rem] s5:mt-[2rem] s5:gap-[2rem] s5:p-[2rem]"
      >

        <motion.div
          initial={{ x: "-10%", y: "10%", opacity: 0 }}
          whileInView={{ x: "0%", y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className=" max-w-container-width... col-span-full s5:col-span-5 grid h-[48rem] overflow-hidden rounded-[1rem] s6:h-[30rem]"
        >
          <div className="relative z-10 flex h-full flex-col  overflow-hidden rounded-[1rem] bg-space s6:flex-row">
            <div className="h-[24rem] text-white">
              <h3 className="m-[1rem] text-3xl font-extrabold">Open Source</h3>
              <p className="m-[1rem]">
                Codú is Ireland&quot;s largest coding community. The perfect
                place to learn, contribute and network with like minded
                individuals.
              </p>
              <p className="m-[1rem]">
                The community afforded me the opportunity to actively
                participate in open source projects, delve into an unfamiliar
                codebase, and refine my skills in using Git.
              </p>
              <p>
                Check out my commits
                <a href="https://github.com/codu-code/codu/issues?q=is%3Aclosed+author%3Afishamble+repo%3Acodu-code%2Fcodu">
                  {" "}
                  here{" "}
                </a>
                on gihub.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-[7rem] w-[80%] s6:w-[20rem]">
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
                  className="absolute bottom-[-7rem] z-0 aspect-square h-[18rem] s6:h-[20rem]"
                  initial={{ rotate: 0, x: "10vw", y: 0 }}
                  whileInView={{ rotate: 90, x: "-90vw", y: "-50%" }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 30, repeat: Infinity }}
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
        </motion.div>

        <div className="min-h-[20rem] bg-white col-span-full s5:col-span-3 rounded-[1rem]"></div>

      </div>
    </>
  );
}

{
  /* <div className="absolute  w-[26rem] h-[9rem] border-2 border-slate...">
              <Image
                src="/git-stats.png"
                fill={true}
                alt="JP stats for open source contributions"
                style={{ objectFit: "cover" }}
              />
            </div> */
}
