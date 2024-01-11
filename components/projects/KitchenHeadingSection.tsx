import React from "react";
import Image from "next/image";
import waiter from "@/public/waiter.png";

import OpenIcon from "@/icons/openIcon.svg";
import GithubIcon from "@/icons/github.svg";
import Link from "next/link";

export default function KitchenHeadingSection() {
  return (
    <>
      <div className="col-span-full rounded-[1rem] bg-blue-400  p-4 s3:order-1 s3:col-span-6 s6:col-span-3 flex justify-center items-center">
        <h3 className="text-[1.1rem] font-semibold s3:text-[1.4rem] s6:text-[1.6rem]">Kitchen management</h3>
      </div>

      <div className="col-span-full  row-span-4... rounded-[1rem] bg-waiterYellow  p-4 s3:order-4 s3:col-span-5 s6:order-3 s6:col-span-3  s4:col-span-6
      
      s2:text-[1.3rem] s3:text-[1.6rem] s5:text-[1.8rem]
      ">
        <p>This project consists of two apps.</p>
        <p>
          A point of sale, for taking orders, and a
          Kitchen display system, which is a digital visual representation of a
          traditional kitchen pass.
        </p>
      </div>

      <div className="col-span-3  row-span-1 flex items-center justify-center rounded-[1rem] bg-waiterYellow s3:order-2  s3:col-span-2 s6:order-4 s6:col-span-1">
        <Image
          src={waiter}
          alt="outline of a waiter holding a tray with a glass on it"
          // style={{ objectFit: "cover" }}
          // unoptimized
          className="p-[4rem]... w-full... object-contain max-h-[6rem]"
        />
      </div>

      <div className="col-span-5 rounded-[1rem] bg-emerald-500 p-4 flex items-center justify-center s3:order-3 s3:col-span-3 s4:col-span-2 s6:order-5">
        <ProjectLinks />
      </div>
    </>
  );
}

function ProjectLinks() {
  return (
    <div className="s2:text-[1.3rem] s3:p-8 s3:text-[1.6rem] s5:text-[1.8rem]">
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
