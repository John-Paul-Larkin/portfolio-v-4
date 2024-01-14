import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";
import FirebaseIcon from "@/icons/tech-icons/firebase.svg";
import ReactIcon from "@/icons/tech-icons/react.svg";
import TypeScriptIcon from "@/icons/tech-icons/typescript.svg";

import Image from "next/image";
import React from "react";

import kitchenDisplay from "@/public/KitchenDisplay2.webp";
import posMove from "@/public/posMove.webp";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Scrollbar } from "swiper/modules";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function RestaurantCarousel() {
  return (
    <motion.div
      initial={{ x: "10px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="col-span-full max-h-[40rem] overflow-hidden rounded-[1rem]  s60:order-6"
    >
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        modules={[Scrollbar, Autoplay, Navigation, Keyboard]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation
        className="h-full"
        keyboard={{
          enabled: true,
          pageUpDown: false,
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
    </motion.div>
  );
}

function SlideOne() {
  return (
    <div className="flex h-full bg-yellow-300 ">
      <div className="paragraph-text mx-auto my-auto flex h-full max-h-[35rem] max-w-[30rem] flex-col justify-evenly p-4 s60:p-8">
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
              <div className="btn-hover">
                <OpenIcon className="w-[.8em]" />
              </div>
            </Link>

            <Link
              href="https://github.com/Fishamble/kitchenpos"
              // passHref={true}
              target="_blank"
              aria-label="link to github of POS project"
            >
              <div className="btn-hover">
                <GithubIcon className="w-[.8em] " />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-4 mr-4 flex h-full min-w-[50%] items-center justify-center">
        <Image
          src={posMove}
          alt="animated example of the point of sale application"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="flex h-full flex-col bg-yellow-300">
      <div className="mx-auto flex max-w-[30rem] grow flex-col justify-around s40:flex-row s40:justify-center">
        <div className="order-1 flex flex-col justify-end text-[1.4rem] s40:text-[2rem] s70:text-[2.5rem]">
          <div className="mx-auto mb-[1em] mt-[.5em] flex w-[4em] justify-between s40:mx-[.5em] s40:mb-[2em] s40:h-[4em] s40:w-auto s40:flex-col">
            <Link
              href="https://kitchendisplay.netlify.app/"
              // passHref={true}
              target="_blank"
              aria-label="link to live version of kitchen display app"
            >
              <div className="btn-hover">
                <OpenIcon className="w-[.8em]" />
              </div>
            </Link>

            <Link
              href="https://github.com/Fishamble/kitchen_back_end"
              // passHref={true}
              target="_blank"
              aria-label="link to github of kitchen display project"
            >
              <div className="btn-hover">
                <GithubIcon className="w-[.8em]" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex grow  flex-col justify-evenly px-4 s40:order-2 s45:text-[1.3rem] s60:p-8 s60:text-[1.6rem] s80:text-[1.8rem]">
          <h3 className="text-[1.3em] font-semibold">KDS app</h3>
          <p>
            The order is sent through to the kitchen, where the chef has all the
            details displayed on a timline.
          </p>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Image
          src={kitchenDisplay}
          alt="animated example showing orders on the kitchen display app"
          // style={{ objectFit: "cover" }}
          // unoptimized
          className="w-full  border-2  border-black object-contain"
        />
      </div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="flex h-full  w-full flex-col bg-yellow-300 s45:text-[1.3rem]  s60:text-[1.6rem] s80:text-[1.8rem] s100:flex-row">
      <div className="flex grow flex-col justify-evenly s100:min-w-[30rem]">
        <div className="mx-auto flex w-[70%] max-w-[28rem] items-center justify-center">
          <p>This intro video showcases the applications features.(1:17)</p>
        </div>

        <div className="mx-auto flex w-[11em] justify-between s100:w-[90%] s100:max-w-[8em]">
          <TypeScriptIcon className="w-[2em]" />
          <ReactIcon className="w-[2em]" />
          <FirebaseIcon className="w-[2em]" />
        </div>
      </div>

      <div className="flex aspect-video w-full justify-center p-[1rem] s80:max-h-[25rem] s100:aspect-auto s100:max-h-max s100:p-4  s100:pl-0">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://youtu.be/vgQ1oEJDxEU"
          light={true}
          volume={1}
          controls={true}
          playing={true}
          className="border-2 border-black"
        />
      </div>
    </div>
  );
}
