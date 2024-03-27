"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";



const Niga = () => {
  return (
    <div>


      {/*
      <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <div class="content">
        
        <div className="w-[250px] h-[450px] px-0 py-[50px]">
          <div class="swiper-wrapper">
            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.5</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">The Queen's Gambit</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                className="object-[50%_0%]"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">9.5</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">Breaking Bad</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.1</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">Wednesday</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6b6ad966-79e1-4d3c-8f92-566d0fee8082"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.7</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">Stranger Things</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2ad44f5d-2215-4416-9c9b-2bae3be51a67"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.6</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">Anne with an E</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/aa8fe914-741f-4bf4-ad4a-24f19d1f4178"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.9</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">Friends</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                className="object-[50%_0%]"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d5f10b4f-7d34-45bd-bb5f-5f1530c2ac1c"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.6</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">The Crown</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7cbac263-7c55-4428-908e-31018dc1bce3"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">8.7</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">House M.D.</h2>
              </div>
            </div>

            <div className="relative shadow-[0_15px_50px_rgba(0,0,0,0.2)] select-none rounded-[10px]">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2929f534-3bc3-4cbd-b84c-80df863d5a38"
                alt="" />
              <div className="absolute w-full h-full bg-no-repeat bg-cover inset-0">
                <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">9.2</span>
                <h2 className="absolute text-white font-normal text-[1.1rem] leading-[1.4] ml-5 mr-0 mt-0 mb-5 left-0 bottom-0">Game of Thrones</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <swiper/>
  */}

    </div>
  )
}


export default Niga
