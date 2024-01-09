import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ClickArrow from "@/icons/click-arrow.svg";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ x: "-10%", opacity: 0 }}
      whileInView={{ x: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="order-1 min-h-[20rem] w-full min-w-0 rounded-[2rem] bg-red-400 pb-2 text-2xl font-extrabold s2:m-0 s3:col-span-4 s3:text-3xl s4:row-span-2  s4:text-[34px] s5:row-span-1 s6:text-5xl"
    >
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        // navigation
        className="max-w-[80%]... bg-blue-700... h-full w-full"
      >
        <SwiperSlide>
          <div className="flex h-full items-center justify-center">
            <p>Me?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex h-full items-center justify-center">
            <p>I love to code.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-yellow-400... flex h-full w-full items-center justify-center overflow-hidden ">
            <div className="bg-red-500... w-[90%]">
              <p className="relative">
                I build full-stack javascript{" "}
                <span className="text-slate-50">projects.</span>
                <br />
                <span className="mt-[.8em] text-[.8em]">
                  (with a focus on React)
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <div className="bg-slate-500.. w-[90%]">
              <p>
                Im currently attending SETU undertaking a
                <br />
                <span className="whitespace-nowrap text-slate-50">
                  {" "}
                  higher Diploma{" "}
                </span>
                <br />
                in computer science.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full items-center justify-center">
            <div className="bg-red-500... w-[90%]">
              <p className="mb-[1em]">Go ahead.</p>

              <p className="mb-[1em]">Make my day!</p>
              <a
                href="mailto: johnplarkin@gmail.com"
                className=" text-slate-50... text-[.7em]"
              >
                johnplarkin@gmail.com
              </a>

              {/* <p className="mt-[1em]">It will make my day!</p> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
}

{
  /* <motion.div
    initial={{ scale: 1, rotate:'260deg' }}
    whileInView={{ scale: 0.9, rotate:'260deg' }}
    transition={{
      repeat: Infinity,
      duration: 1,
      ease: "circInOut",
      repeatType: "reverse",
    }}
    className="bg-white... absolute h-[10rem] w-[10rem]  top-[-2rem] right-[-2rem]"
  >
    <ClickArrow />
  </motion.div> */
}
