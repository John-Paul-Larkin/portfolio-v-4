import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import dynamic from "next/dynamic";
import kitchenDisplay from "@/public/KitchenDisplay2.webp";
import posMove from "@/public/posMove.webp";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function KitchenCarousel() {
  return (
    <div className="s6:col-span-4... col-span-full  overflow-hidden rounded-[1rem] s3:order-6">
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        modules={[Scrollbar, Autoplay, Navigation]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        navigation
        className="mt-[1rem]... h-full"
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
      <div className=" grow...  flex h-full flex-col justify-evenly p-4 s2:text-[1.3rem] s3:p-8 s3:text-[1.6rem] s5:text-[1.8rem]">
        <p>Wait staff enter orders from the restaurant floor.</p>
        <p>Each item is completely customisable.</p>
      </div>

      <div className="bg-blue-400... mb-4 mr-4 flex h-full min-w-[50%] items-center justify-center">
        <Image
          src={posMove}
          alt="animated example of the point of sale application"
          // style={{ objectFit: "cover" }}

          className="p-[1rem]... w-fit... h-full  object-contain"
        />
      </div>
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="bg-pink-500... flex h-full flex-col bg-yellow-300">
      <div className="flex grow flex-col justify-evenly p-4  s2:text-[1.3rem] s3:p-8 s3:text-[1.6rem] s5:text-[1.8rem]">
        <p>Those orders go straight to the kitchen</p>
        <p>The chef then has the order information on a kitchen display.</p>
      </div>

      <div className="bg-yellow-200... p-4">
        <Image
          src={kitchenDisplay}
          alt="animated example showing orders on the kitchen diplay app"
          // style={{ objectFit: "cover" }}
          // unoptimized
          className="p-[4rem]... w-full border-2  border-black object-contain"
        />
      </div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="bg-blue-200... flex h-full  w-full flex-col bg-yellow-300">
      <div className="grow s2:text-[1.3rem] s3:p-8 s3:text-[1.6rem] s5:text-[1.8rem]">
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
