import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
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
    <div className="col-span-full overflow-hidden  rounded-[1rem] s6:col-span-4... s3:order-6">
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={false}
        modules={[Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        // navigation
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
    <div className="w-full... bg-red-400... flex h-full bg-yellow-300 ">
      <div className="h-full... w-full... grow... bg-white">
        <p>Wait staff enter orders from the restaurant floor.</p>
        <p>Each item is completely customisable.</p>
      </div>

      {/* <div className="w-[60%]... py-[1rem] h-full..."> */}
      <Image
        src={posMove}
        alt="animated example of the point of sale application"
        // style={{ objectFit: "cover" }}

        className=" aspect-auto... h-full max-h-[15rem] object-contain p-[1rem]"
      />
      {/* </div> */}
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="flex h-full flex-col">
      <div className="grow bg-pink-500">
        <p>Those orders go straight to the kitchen</p>
        <p>The chef then has the order information on a kitchen display.</p>
      </div>

      <div>
        <Image
          src={kitchenDisplay}
          alt="animated example showing orders on the kitchen diplay app"
          // style={{ objectFit: "cover" }}
          // unoptimized
          className="p-[4rem]... w-full object-contain"
        />
      </div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="flex h-full w-full  flex-col bg-blue-200">
      <div className="grow ">
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
        />
      </div>
    </div>
  );
}
