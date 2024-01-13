import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ x: "-10px", opacity: 0 }}
      whileInView={{ x: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="order-1 min-h-[20rem] w-full min-w-0 rounded-[2rem] bg-red-400 pb-2 text-2xl font-extrabold s45:m-0 s60:col-span-4 s60:text-3xl s70:row-span-2  s70:text-[34px] s80:row-span-1 s100:text-5xl"
    >
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={false}
        modules={[Navigation, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1800,
          disableOnInteraction: true,
        }}
        // navigation
        className="h-full w-full"
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
          <div className=" flex h-full w-full items-center justify-center overflow-hidden ">
            <div className="w-[90%]">
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
            <div className="w-[90%]">
              <p className="mb-[1em]">Want to make my day?</p>
              <a href="mailto: johnplarkin@gmail.com" className="text-[.7em]">
                johnplarkin@gmail.com
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
}
