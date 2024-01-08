import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

export default function AboutSection() {
  return (
    <motion.section
      initial={{ x: "-10%", opacity: 0 }}
      whileInView={{ x: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="order-1 s2:m-0 s3:col-span-4 s4:row-span-2 s5:row-span-1 pb-4 bg-red-400 rounded-[2rem] "
    >
      <Swiper 
      spaceBetween={16}
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Scrollbar, Autoplay]}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      // navigation
      className="my-4... pb-4...     w-full h-full">
        <div className="max-w-md flex items-center justify-center h-full bg-blue-400">


        <SwiperSlide>
          {" "}
          <p>I love to code.</p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <p>
            I have spent the previous eighteen months building projects in the
            full-stack javascript ecosystem, but mostly focusing on React.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Im currently attending SETU to undertake a higher Diploma in
            computer science
          </p>
        </SwiperSlide>
        </div>
      </Swiper>
      
    </motion.section>
  );
}

{/* <Swiper
  spaceBetween={50}
  slidesPerView={3}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  ...
</Swiper>; */}
