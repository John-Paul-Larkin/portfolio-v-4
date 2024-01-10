import React from "react";
import Image from "next/image";
import annoyedCustomer from "@/public/annoyedCustomer.jpg";
import kitchenDisplay from "@/public/KitchenDisplay2.webp";
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
        <h2 className="w-fit rounded-[1rem] bg-navy-300 p-4 text-4xl font-extrabold text-white">
          Projects
        </h2>
      </div>

      {/* /////////////////////////////// */}

      <section
        className=" 
          mb-[100rem] mt-[1rem]

        grid grid-cols-[repeat(8,1fr)]
        grid-rows-2
        gap-[1rem] 
        rounded-[2rem]
        bg-overall-bg
      
        p-[1rem] 
       s5:mt-[2rem]
       s5:gap-[2rem]
       s5:p-[2rem]
      "
      >
        <div className="relative col-span-full h-[17rem]... s5:h-[35rem] bg-navy-300 s6:col-span-4 rounded-[2rem] overflow-hidden">
          <div className=" overflow-hidden ">
            <Image
              src={annoyedCustomer}
              priority={false}
              alt="Waiter standing over annoyed cutomer"
              // style={{ objectFit: "cover", }}

              className=" s5:w-[90%] "
            />
          </div>


          {/* <p className="bg-bgCream absolute right-[2rem] top-[2rem] rounded-[1rem] border-2 border-navy-600 p-[2rem] text-[1.3rem] font-semibold leading-5 text-navy-600">
            What&apos;s taking
            <br /> so long?
          </p> */}


        </div>

        <div className="h-full... bg-navy-300... col-span-full h-[15rem] s5:h-[35rem] s6:col-span-4  rounded-[1rem] overflow-hidden">
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
              <div className="w-full... flex h-full bg-yellow-300 ">
                <div className="h-full... w-full... grow... bg-white">
                  <p>Wait staff enter orders from the restaurant floor.</p>
                  <p>Each item is completely customisable.</p>
                </div>

                {/* <div className="w-[60%]... py-[1rem] h-full..."> */}
                <Image
                  src={posMove}
                  alt="animated example of the point of sale application"
                  // style={{ objectFit: "cover" }}

                  className=" aspect-auto... h-full object-contain p-[1rem] "
                />
                {/* </div> */}
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
                    alt="animated example showing orders on the kitchen diplay app"
                    // style={{ objectFit: "cover" }}
                    // unoptimized
                    className="p-[4rem]... w-full object-contain"
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
      </section>
    </>
  );
}
