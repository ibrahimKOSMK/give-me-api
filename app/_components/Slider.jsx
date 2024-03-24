"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaPlay } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";


import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const Slider = () => {
  return (
    <div className="bg-second flex items-center justify-center flex-col h-[430px] ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[70%] lg:max-w-[100%]"
      >
                 {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col  text-center ml-2  gap-6  mb-12 border-teal border-x-2 group relative shadow-lg text-niga rounded-md px-6 py-8 h-[250px] w-[215px] lg:h-[350px] lg:w-[280px] overflow-hidden cursor-pointer  ">
              
              <div
                className="absolute inset-0 bg-cover  bg-center   "  

              style={{backgroundImage: `url(https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608872251/the-walking-dead-9781608872251_hr.jpg)` } }  
              />


              <div className="absolute inset-0  opacity-100 bg-gradient-to-t from-niga to-white)" />

              <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">{item.rate}</span>
          <div className=" opacity-0  group-hover:opacity-100 hover:transition-all ease-in-out duration-500 ">

              <div className="relative flex flex-col gap-3 text-center ">

                <FaPlay className="text-white text-3xl ml-24 transition-all ease-in duration-1000 mt-36  " />
                
                <p className="lg:text-[15px] mt-8 ">{item.content} </p>

              </div>

          </div>
          <h1 className="line-clamp-1 text-center text-lg lg:text-sm text-white  absolute pt-[275px] pl-10 ">{item.title} </h1>

              <RxArrowTopRight className="absolute bottom-5 left-5 w-[25px] h-[25px] text-white  group-hover:text-blue-500 group-hover:rotate-45 duration-100" />

            </div>


          </SwiperSlide>
          
        ))}
          
      </Swiper>
    </div>
  );
};

export default Slider;