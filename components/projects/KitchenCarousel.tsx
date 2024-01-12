import React from "react";
import Image from "next/image";
import GithubIcon from "@/icons/github.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import dynamic from "next/dynamic";
import kitchenDisplay from "@/public/KitchenDisplay2.webp";
import posMove from "@/public/posMove.webp";
import OpenIcon from "@/icons/openIcon.svg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function KitchenCarousel() {
  return (
    <div className="s100:col-span-4... col-span-full  max-h-[40rem] overflow-hidden rounded-[1rem] s60:order-6">
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        modules={[Scrollbar, Autoplay, Navigation, Keyboard]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        navigation
        className="mt-[1rem]... h-full"

        keyboard={{
          enabled: true,
          pageUpDown:false
        }}
    

      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function SlideOne() {
  return (
    <div className="flex h-full bg-yellow-300 ">
      <div className=" grow...  bg-white... mx-auto my-auto flex h-full max-h-[35rem] max-w-[30rem] flex-col justify-evenly p-4 s45:text-[1.3rem] s60:p-8 s60:text-[1.6rem] s80:text-[1.8rem]">
        <h3 className="text-[1.3em] font-semibold">POS app</h3>
        <p>Wait staff enter orders from the restaurant floor.</p>
        <p>Each menu item is completely customisable.</p>

        <div className=" flex justify-center text-[1.4rem] s40:text-[2rem] s70:text-[2.5rem] ">
          <div className="flex w-[4em] justify-between">
            <Link
              href="https://kitchenpos.netlify.app/"
              // passHref={true}
              target="_blank"
              aria-label="link to live version of point of sale app"
            >
              <OpenIcon className="w-[1em] " />
            </Link>

            <Link
              href="https://github.com/Fishamble/kitchenpos"
              // passHref={true}
              target="_blank"
              aria-label="link to github of POS project"
            >
              <GithubIcon className="w-[1em] " />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-400... mb-4 mr-4 flex h-full min-w-[50%] items-center justify-center">
        <Image
          src={posMove}
          alt="animated example of the point of sale application"
          // style={{ objectFit: "cover" }}

          className="p-[1rem]... w-fit... h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="flex h-full flex-col s40:flex-row... bg-yellow-300">

      <div className="flex flex-col s40:flex-row justify-around s40:justify-center grow bg-blue-300... max-w-[30rem] mx-auto">  
    
        <div className=" flex flex-col justify-end bg-red-700... text-[1.4rem] s40:text-[2rem] s70:text-[2.5rem] order-1">
          <div className="flex w-[4em] mx-auto s40:w-auto s40:h-[3em] s40:flex-col justify-between mb-[.5em] s40:mb-[2em] s40:mx-[.5em]">
            <Link
              href="https://kitchendisplay.netlify.app/"
              // passHref={true}
              target="_blank"
              aria-label="link to live version of kitchen display app"
            >
              <OpenIcon className="w-[1em] " />
            </Link>

            <Link
              href="https://github.com/Fishamble/kitchen_back_end"
              // passHref={true}
              target="_blank"
              aria-label="link to github of kitchen display project"
            >
              <GithubIcon className="w-[1em] " />
            </Link>
          </div>
        </div>



        <div className=" flex  grow flex-col  justify-evenly bg-white... px-4 s45:text-[1.3rem] s60:p-8 s60:text-[1.6rem] s80:text-[1.8rem] s40:order-2">
          <h3 className="text-[1.3em] font-semibold">KDS app</h3>
          {/* <p>Those orders go straight to the kitchen</p> */}
          <p>
            The order is sent through to the kitchen, where the chef has all the
            details displayed on a timline.
          </p>
        </div>




      </div>












      <div className="bg-yellow-200... p-4 pt-0">
        <Image
          src={kitchenDisplay}
          alt="animated example showing orders on the kitchen display app"
          // style={{ objectFit: "cover" }}
          // unoptimized
          className="p-[4rem]... w-full  border-2  border-black object-contain"
        />
      </div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="bg-blue-200... flex h-full  w-full flex-col bg-yellow-300">
      <div className="grow s45:text-[1.3rem] s60:p-8 s60:text-[1.6rem] s80:text-[1.8rem]">
        Watch this intro showcasing the applications features.(1:17)
      </div>
      <div className="w-[50%]... aspect-video p-[1rem] ">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://youtu.be/vgQ1oEJDxEU"
          light={true}
          volume={1}
          controls={true}
          // muted={false}
          playing={true}
          className="border-2 border-black"
        />
      </div>
    </div>
  );
}
