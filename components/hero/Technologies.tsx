import { motion } from "framer-motion";
import React from "react";

import CssIcon from "@/icons/tech-icons/css.svg";
import FirebaseIcon from "@/icons/tech-icons/firebase.svg";
import FramerIcon from "@/icons/tech-icons/framer.svg";
import HtmlIcon from "@/icons/tech-icons/html.svg";
import JavaScriptIcon from "@/icons/tech-icons/javascript.svg";
import MysqlIcon from "@/icons/tech-icons/mysql.svg";
import NextIcon from "@/icons/tech-icons/next.svg";
import NodeIcon from "@/icons/tech-icons/node.svg";
import PrismaIcon from "@/icons/tech-icons/prisma.svg";
import ReactIcon from "@/icons/tech-icons/react.svg";
import ReduxIcon from "@/icons/tech-icons/redux.svg";
import TailwindIcon from "@/icons/tech-icons/tailwind.svg";
import TypeScriptIcon from "@/icons/tech-icons/typescript.svg";
import ZodIcon from "@/icons/tech-icons/zod.svg";
import Tree from "@/icons/tree.svg";

export default function Technologies() {
  return (
    <>
      <motion.section
        initial={{ x: "10px", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className=" 
        order-2 row-span-1 my-4 overflow-hidden rounded-[1rem] bg-green
        s45:col-span-1 s45:row-span-1 s45:m-0 s60:col-span-4 s70:row-span-2 s100:row-span-1"
      >
        <motion.div
          initial={{ x: "10px", opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="relative flex h-full w-full items-center justify-center"
        >
          <div className=" h-[30rem] w-fit bg-green s70:h-fit">
            <div className="relative h-full overflow-hidden">
              <motion.div
                initial={{ y: "5%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 4 }}
                className="z-10 h-full w-full"
              >
                <Tree className="z-10 h-full w-full" />
              </motion.div>
            </div>
          </div>

          <TechIcons />
        </motion.div>
      </motion.section>
    </>
  );
}

function TechIcons() {
  return (
    <div className=" absolute top-[50%] z-30 grid w-full max-w-[35rem] grid-cols-[repeat(15,1fr)] grid-rows-[repeat(5,auto)] gap-[.5rem] p-4 text-[1rem] text-white s100:text-[1.2rem]  s120:text-[1.3rem] s145:text-[1.4rem]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 2 }}
        className="col-span-full mb-[1em] flex items-center justify-center text-[1em]"
      >
        <div className="flex w-fit rounded-md bg-blue-500 shadow-md shadow-slate-600">
          <p className="p-[.2em]">JavaScript</p>
          <div className="relative right-[-.5em] top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] shadow-md shadow-slate-600">
            <JavaScriptIcon />
          </div>
        </div>
      </motion.div>

      <RowTwo />
      <RowThree />
      <RowFour />
    </div>
  );
}

function RowTwo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 2 }}
        className="col-span-5 mb-[1em] flex items-center justify-center text-[.55em] "
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600 shadow-md shadow-slate-600">
          <p className=" p-[.2em] ">TypeScript</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <TypeScriptIcon />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 2 }}
        className="col-span-5 mb-[1em] flex items-center justify-center text-[.55em]"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">React</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <ReactIcon />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 2 }}
        className="col-span-5 mb-[1em] flex items-center justify-center text-[.55em]"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Node</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <NodeIcon />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function RowThree() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.1, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Next.js</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <NextIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Html</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <HtmlIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">CSS</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <CssIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.4, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Redux</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <ReduxIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Firebase</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <FirebaseIcon />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function RowFour() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.6, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Tailwind</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <TailwindIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.7, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Framer</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <FramerIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.8, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" whitespace-nowrap p-[.2em]">My SQL</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <MysqlIcon />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.9, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Prisma</p>

          <div className="relative top-[-.5em] h-[1.9em] w-[1.9em] rounded-md bg-white">
            <div className="absolute left-[.2em] top-0 h-[1.5em] w-[1.5em]">
              <PrismaIcon />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3, duration: 2 }}
        className="col-span-3 flex items-center  justify-center text-[.55em] s45:col-span-5 s60:col-span-3"
      >
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-600">
          <p className=" p-[.2em]">Zod</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] rounded-md bg-white p-[.2em] ">
            <ZodIcon />
          </div>
        </div>
      </motion.div>
    </>
  );
}
