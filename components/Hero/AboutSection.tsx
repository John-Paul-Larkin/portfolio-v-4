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
      className="order-1 rounded-[2rem] bg-red-400 pb-4 text-5xl font-extrabold s2:m-0 s3:col-span-4 s4:row-span-2 s5:row-span-1 "
    >
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        // navigation
        className="h-full max-w-[80%]"
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
          {" "}
          <div className="flex h-full items-center justify-center overflow-hidden">
            <p className="relative">
              I build full-stack javascript{" "}
              <span className="text-slate-50">
                projects.
                </span>
                <motion.div
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
                </motion.div>
              <p className="mt-[.8em] text-[.8em]">(with a focus on React)</p>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full items-center justify-center">
            <p>
              Im currently attending SETU to undertake a
              <span className="text-slate-50"> higher Diploma </span>
              in computer science
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
}
