import React from "react";
import Image from "next/image";
import waiter from "@/public/waiter.png";

import OpenIcon from "@/icons/openIcon.svg";
import GithubIcon from "@/icons/github.svg";
import Link from "next/link";

export default function KitchenHeadingSection() {
  return (
    <>
      <div
        className="
      col-span-full  rounded-[1rem] bg-red-400 p-4 s45:text-[1.3rem]

      s60:order-1
      s60:col-span-full
      s60:text-[1.6rem]
      s80:text-[1.8rem] s100:col-span-4 s100:row-span-3
      "
      >
        <h3 className="text-[1.3em] font-semibold m-[1em]">
          Restaurant management
        </h3>

        <div className=" float-right w-[7em]">
          <Image
            src={waiter}
            alt="outline of a waiter holding a tray with a glass on it"
            // style={{ objectFit: "cover" }}

            className="rounded-[1rem]  bg-waiterYellow... object-contain "
          />
        </div>

        <p className="mb-[1em] ml-[1em]">
          In a busy restaurant, speed and efficiency are the key to success.
        </p>

        <p className="mb-[1em] ml-[1em]">
          These point of sale and kitchen diplay apps facilitate communication and clarity between the front of
          house and the kitchen.
        </p>
    
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
          href="https://kitchendisplay.netlify.app/"
          // passHref={true}
          target="_blank"
          aria-label="link to live version of kitchen display app"
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
