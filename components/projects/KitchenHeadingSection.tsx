import React from "react";
import Image from "next/image";
import waiter from "@/public/waiter.png";

import OpenIcon from "@/icons/openIcon.svg";
import GithubIcon from "@/icons/github.svg";
import Link from "next/link";

export default function KitchenHeadingSection() {
  return (
    <>
      <div className="bg-blue-400... s60:order-1 s60:col-span-6 s100:col-span-3  col-span-full flex items-center justify-center rounded-[1rem] bg-red-400 p-4">
        <h3 className="s60:text-[1.4rem] s100:text-[1.6rem] text-[1.1rem] font-semibold">
          Kitchen management
        </h3>
      </div>

      <div
        className="row-span-4...  bg-waiterYellow... s45:text-[1.3rem] s60:order-4 s60:col-span-5  s60:text-[1.6rem] s70:col-span-6 s80:text-[1.8rem] s100:order-3 s100:col-span-3  col-span-full
      
      rounded-[1rem] bg-red-400 p-4
      "
      >
        <p>This project consists of two apps.</p>
        <p>
          A point of sale, for taking orders, and a Kitchen display system,
          which is a digital visual representation of a traditional kitchen
          pass.
        </p>
      </div>

      <div className="bg-red-400...  s60:order-2 s60:col-span-2 s100:order-4 s100:col-span-1 col-span-3 row-span-1 flex items-center  justify-center rounded-[1rem] bg-waiterYellow">
        <Image
          src={waiter}
          alt="outline of a waiter holding a tray with a glass on it"
          // style={{ objectFit: "cover" }}
          // unoptimized
          className="p-[4rem]... w-full... max-h-[6rem] object-contain"
        />
      </div>

      <div className="bg-emerald-500... s60:order-3 s60:col-span-3 s70:col-span-2 s100:order-5 col-span-5 flex items-center justify-center rounded-[1rem] bg-green p-4">
        <ProjectLinks />
      </div>
    </>
  );
}

function ProjectLinks() {
  return (
    <div className="s45:text-[1.3rem] s60:p-8 s60:text-[1.6rem] s80:text-[1.8rem]">
      <div className="flex justify-center">
        <Link
          href="https://kitchenpos.netlify.app/"
          // passHref={true}
          target="_blank"
          aria-label="link to live version of point of sale app"
        >
          <div className="flex w-[6em] justify-between">
            <span>POS</span>
            <OpenIcon className=" ml-4 w-[1em] " />
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link
          href="https://github.com/Fishamble/kitchenpos"
          // passHref={true}
          target="_blank"
          aria-label="link to github of POS project"
        >
          <div className="flex w-[6em] justify-between">
            GitHub
            <GithubIcon className="ml-4 w-[1em]  " />
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link
          href="link to live version of kitchen display app"
          // passHref={true}
          target="_blank"
          aria-label="https://kitchendisplay.netlify.app/"
        >
          <div className="flex w-[6em] justify-between">
            Kitchen
            <OpenIcon className="ml-4 w-[1em]  " />
          </div>
        </Link>
      </div>
    </div>
  );
}
