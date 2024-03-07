import Link from "next/link";
import React from "react";
import Image from "next/image";
import spaceTourism from "@/public/spaceTourism.png";
import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";
import { motion } from "framer-motion";

export default function SpaceTourisimSection() {
  return (
    <section
      className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
    rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem]"
    >
      <motion.div
        initial={{ x: "-10px", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="h-[30rem]... paragraph-text col-span-full rounded-[1rem] bg-red-400 s100:col-span-4"
      >
        <h3 className="m-[1em] text-[1.3em] font-semibold">Space Tourism</h3>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -300px 0px" }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className="mx-[1em] mb-[1em]">
            This is my interpretation of a frontend mentor challenge, which you
            can find
            {" "}
            <Link
              href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
              target="_blank"
              aria-label="link to frontend mentor challenge details"
              className="underline text-blue-700"
            >
              here.
            </Link>
          </p>

          <p className="mx-[1em] mb-[1em]">
            I aimed for a pixel perfect duplication of the provided figma design
            files, which include designs for mobile, tablet and desktop.
          </p>
        </motion.div>

        <div className="flex justify-center mb-4">
          <div className="flex w-[4em] justify-between ">
            <Link
              href="https://fem-space-tourism-website-beryl.vercel.app/"
              target="_blank"
              aria-label="link to live version of space tourisim app"
            >
              <div className="btn-hover">
                <OpenIcon className="w-[.8em]" />
              </div>
            </Link>

            <Link
              href="https://github.com/John-Paul-Larkin/fem-space-tourism-website"
              target="_blank"
              aria-label="link to github of space tourisim project"
            >
              <div className="btn-hover">
                <GithubIcon className="w-[.8em] " />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "10px", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4"
      >
        <Link
          href="https://fem-space-tourism-website-beryl.vercel.app/"
          target="_blank"
          aria-label="link to live version of space tourisim app"
          className="h-full w-full"
        >
          <Image
            src={spaceTourism}
            alt="space tourism with the a picture of the  moon"
            className="h-full object-cover"
          />
        </Link>
      </motion.div>
    </section>
  );
}
