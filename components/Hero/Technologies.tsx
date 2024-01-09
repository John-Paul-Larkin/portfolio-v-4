import React from "react";
import { motion } from "framer-motion";
import Tree from "@/icons/tree.svg";
import JavaScriptIcon from "@/icons/tech-icons/javascript.svg";
import TypeScriptIcon from "@/icons/tech-icons/typescript.svg";
import ReactIcon from "@/icons/tech-icons/react.svg";
import NodeIcon from "@/icons/tech-icons/node.svg";
import NextIcon from "@/icons/tech-icons/next.svg";
import HtmlIcon from "@/icons/tech-icons/html.svg";
import CssIcon from "@/icons/tech-icons/css.svg";
import ReduxIcon from "@/icons/tech-icons/redux.svg";
import FirebaseIcon from "@/icons/tech-icons/firebase.svg";
import TailwindIcon from "@/icons/tech-icons/tailwind.svg";
import FramerIcon from "@/icons/tech-icons/framer.svg";
import MysqlIcon from "@/icons/tech-icons/mysql.svg";
import PrismaIcon from "@/icons/tech-icons/prisma.svg";
import ZodIcon from "@/icons/tech-icons/zod.svg";

export default function Technologies() {
  return (
    <>
      <motion.section
        initial={{ x: "10%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className=" 
        order-2 row-span-1 my-4 overflow-hidden rounded-[1rem] bg-green
        s2:col-span-1 s2:row-span-1 s2:m-0 
        s3:col-span-4
        s4:row-span-2 
        s6:row-span-1"
      >
        <motion.div
          initial={{ x: "10%", opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="bg-yellow-800... flex h-full w-full items-center justify-center"
        >
          <div className=" h-[30rem] w-fit bg-green s4:h-fit">
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

              <motion.div
                initial={{ y: "0%", opacity: 1 }}
                whileInView={{ y: "100%", opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 5 }}
                className="absolute top-[42%] z-40 h-[60%] w-full bg-green"
              ></motion.div>
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
    <div className="bg-red-500... absolute top-[50%] z-30 grid w-full max-w-[35rem] grid-cols-[repeat(15,1fr)] grid-rows-[repeat(5,auto)] gap-[.5rem] p-4 text-[1rem] text-white">
      <div
        className="bg-orange-700... col-span-full
         flex items-center justify-center text-[1em]"
      >
        <div className="flex w-fit rounded-md bg-blue-500 shadow-md shadow-slate-600">
          <p className=" p-[.3em]  ">JavaScript</p>
          <div className="relative right-[-.5em] top-[-.5em] h-[2em] w-[2em] shadow-md shadow-slate-600">
            <JavaScriptIcon />
          </div>
        </div>
      </div>

      <div className="col-span-5 flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em] ">TypeScript</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <TypeScriptIcon />
          </div>
        </div>
      </div>

      <div className="col-span-5 flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">React</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <ReactIcon />
          </div>
        </div>
      </div>

      <div className="col-span-5 flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Node</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <NodeIcon />
          </div>
        </div>
      </div>
      <RowThree />
      <RowFour />
    </div>
  );
}

function RowThree() {
  return (
    <>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Next.js</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <NextIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Html</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <HtmlIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">CSS</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <CssIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Redux</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <ReduxIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Firebase</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <FirebaseIcon />
          </div>
        </div>
      </div>
    </>
  );
}

function RowFour() {
  return (
    <>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Tailwind</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <TailwindIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Framer</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <FramerIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em] whitespace-nowrap">My SQL</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <MysqlIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Prisma</p>
          <div className="relative top-[-.5em] h-[1.6em] w-[1.6em] ">
            <PrismaIcon />
          </div>
        </div>
      </div>
      <div className="col-span-3 s2:col-span-5 s3:col-span-3  flex items-center justify-center text-[.55em]">
        <div className=" flex w-[8em] justify-around rounded-md bg-blue-900">
          <p className=" p-[.2em]">Zod</p>
          <div className="relative top-[-.5em] h-[2em] w-[2em] ">
            <ZodIcon />
          </div>
        </div>
      </div>
    </>
  );
}
