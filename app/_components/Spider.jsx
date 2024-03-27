'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import './zngy1.css';
function Spider() {
  return (
    <div className="bg-second flex items-center justify-center  flex-col  ">

    <Swiper
    grapCursor={true}
    initialSlide={4}
    centeredSlides={true}
    slidesPerView={"auto"}
    speed={1000}
    spaceBetween={10}
    freeMode={"false"}
    mousewheel={{
      thresholdDelta : 30,
    }}
    

    pagination={{
    clickable: true,
  }}
  modules={[Pagination]}

    >
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMTExMjM4Mjg3MDheQTJeQWpwZ15BbWU4MDI5MDY3MDgz._V1_FMjpg_UX2048_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMjA4NTI5NjE3NV5BMl5BanBnXkFtZTgwNTQ5MjYzNzM@._V1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMjI0MjA5Mzg2MV5BMl5BanBnXkFtZTgwOTM5MTkyMzI@._V1_.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMjE4OTc0NTY3NF5BMl5BanBnXkFtZTgwMjMxNDEzMzI@._V1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMTA1NjMyNzMwMTNeQTJeQWpwZ15BbWU4MDkwMzUyOTgx._V1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMTA3NTM0MzM1NjBeQTJeQWpwZ15BbWU4MDAxMTg2MTkx._V1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMTYyNDc3Njc1N15BMl5BanBnXkFtZTcwMDE3NDg1Nw@@._V1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMjEwNjU0NjQ2NV5BMl5BanBnXkFtZTcwOTQxNDM2OQ@@._V1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/M/MV5BMjA2OTY5OTEyNl5BMl5BanBnXkFtZTgwNzM5MTkyMzI@._V1_.jpg" alt="" />
            </SwiperSlide>






    </Swiper>

  </div>
  
  )
}

export default Spider
