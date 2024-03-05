import Link from "next/link";
import React from "react";
import Image from "next/image";
import spaceTourism from "@/public/spaceTourism.png";
import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";

export default function SpaceTourisimSeciton() {
  return (
    <section
      className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
    rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem]"
    >
      <div className="h-[30rem]... paragraph-text col-span-full rounded-[1rem] bg-red-500 s100:col-span-4">
        <h3 className="m-[1em] text-[1.3em] font-semibold">Space Tourism</h3>
        <p className="mx-[1em] mb-[1em]">
          This is my interpretation of a frontend mentor challenge, which you
          can find
          <Link
            href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
            target="_blank"
            aria-label="link to frontend mentor challenge details"
          >
            {" "}
            here.
          </Link>
        </p>

        <p className="mx-[1em] mb-[1em]">
          I aimed for a pixel perfect duplication of the provided figma design
          files, which include designs for mobile, tablet and desktop.
        </p>

        <div className="flex justify-center">
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
      </div>

      <div className="col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4">
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
      </div>
    </section>
  );
}
