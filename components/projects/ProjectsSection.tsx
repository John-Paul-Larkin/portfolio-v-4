import React from "react";
import Image from "next/image";
import annoyedCustomer from "@/public/annoyedCustomer.jpg";
import kitchenDisplay from "@/public/kitchenDisplay.webp";
import posMove from "@/public/posMove.webp";
// import ReactPlayer from "react-player/youtube";

// import coreUtils from "@/core/application/utils";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export default function ProjectsSection() {
  return (
    <>
      <div
        className=" mt-[1rem]    
        rounded-[2rem] bg-overall-bg
        p-[1rem] 
        s5:mt-[2rem]
        s5:p-[2rem]"
      >
        <h2 className="rounded-[1rem] w-fit bg-navy-300 p-4 text-4xl font-extrabold text-white">
          Projects
        </h2>
      </div>

      {/* /////////////////////////////// */}

      <section className="p-[1rem] 
       s5:p-[2rem]
        bg-overall-bg
        rounded-[2rem]
        mt-[1rem] s5:mt-[2rem]
      
      ">
        <div
          className="     
        grid grid-cols-[repeat(8,1fr)]
        gap-[1rem] 
        rounded-[2rem]
        bg-navy-300
      
        p-[1rem] 
       s5:gap-[2rem]
       s5:p-[2rem]
      "
        >
          <div className="col-span-full s6:col-span-4 ">
            <div className="w-[100%]...  overflow-hidden rounded-[1rem] bg-yellow-300">
              <Image
                src={annoyedCustomer}
                priority={false}
                alt="Waiter standing over annoyed cutomer"
                // style={{ objectFit: "cover", }}

                className="w-[90%] "
              />
            </div>
          </div>

          <div className="col-span-full s6:col-span-4 ">
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
              className="mt-[1rem] h-[20rem]"
            >
              <SwiperSlide>
                <div className="flex h-full w-full bg-yellow-300">
                  <div className="h-full w-full grow bg-white">
                    <p>Wait staff enter orders from the restaurant floor.</p>
                    <p>Each item is completely customisable.</p>
                  </div>

                  <div className="w-[60%] py-[1rem]">
                    <Image
                      src={posMove}
                      alt="point of sale"
                      // style={{ objectFit: "cover" }}

                      className=" aspect-auto... h-full object-contain "
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex h-full flex-col">
                  <div className="grow bg-pink-500">
                    <p>Those orders go straight to the kitchen</p>
                    <p>
                      The chef then has the order information on a kitchen
                      display.
                    </p>
                  </div>

                  <div>
                    <Image
                      src={kitchenDisplay}
                      alt="kitchen diplay app, showing orders on the sreeen"
                      // style={{ objectFit: "cover" }}

                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex h-full w-full">
                  <div className="grow bg-blue-200">
                    Watch this rundown of all the applications features.
                  </div>
                  <div className="aspect-video h-[80%]">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
