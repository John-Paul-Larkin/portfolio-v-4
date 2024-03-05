import Link from "next/link";
import React from "react";
import Image from "next/image";
import jpMazon from "@/public/JpMazon.webp";
import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";

export default function JpMazonSection() {
  return (
    <section
      className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
    rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem]"
    >
      <div className="col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4">
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
      </div>

      <div className="h-[30rem]... paragraph-text col-span-full rounded-[1rem] bg-green s100:col-span-4">
        <h3 className="m-[1em] text-[1.3em] font-semibold">JPMazon</h3>
        <p className="mx-[1em] mb-[1em]">
          This amazon clone was my first React project. I learned the
          fundamentals of building dynamic user interfaces using React
          components, state, and props.
        </p>

        <p className="mx-[1em] mb-[1em]">
          I used dummyjson.com, which provides fake product data and images
          through REST endpoints, to create responsive product pages and a basic
          shopping cart.
        </p>

        <div className="flex justify-center">
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
      </div>
    </section>
  );
}
