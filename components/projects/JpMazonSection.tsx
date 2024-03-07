import Link from "next/link";
import React from "react";
import Image from "next/image";
import jpMazon from "@/public/JpMazon.webp";
import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";
import { motion } from "framer-motion";

export default function JpMazonSection() {
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
        className="order-last col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:order-first s100:col-span-4"
      >
        <Link
          href="https://jpmazon.netlify.app/"
          target="_blank"
          aria-label="link to live version of space Jp Mazon app"
          className="h-full w-full"
        >
          <Image
            src={jpMazon}
            alt="jp Mazon home page"
            className="h-full w-full object-cover"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: "10px", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="h-[30rem]... paragraph-text order-first col-span-full rounded-[1rem] bg-yellow-300 s100:col-span-4"
      >
        <h3 className="m-[1em] text-[1.3em] font-semibold">JPMazon</h3>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -300px 0px" }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className="mx-[1em] mb-[1em]">
            I built this Amazon clone as my first React project. I focused on
            the fundamentals of building dynamic user interfaces using React
            components, state, and props.
          </p>

          <p className="mx-[1em] mb-[1em]">
            I used dummyjson.com, which provides fake product data and images
            through REST endpoints, to create responsive product pages and a
            basic shopping cart.
          </p>
        </motion.div>

        <div className="flex justify-center mb-4">
          <div className="flex w-[4em] justify-between ">
            <Link
              href="https://jpmazon.netlify.app/"
              target="_blank"
              aria-label="link to live version of space Jp Mazon app"
            >
              <div className="btn-hover">
                <OpenIcon className="w-[.8em]" />
              </div>
            </Link>

            <Link
              href="https://github.com/John-Paul-Larkin/jpmazonV2"
              target="_blank"
              aria-label="link to github of Jp Mazon project"
            >
              <div className="btn-hover">
                <GithubIcon className="w-[.8em] " />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
