'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './zngy.css';

function Ahh() {
  return (
    <div className="bg-second flex items-center justify-center flex-col h-[430px] ">

            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/91PtcHMMGXL._AC_UF894,1000_QL80_.jpg" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.displate.com/280x392/displate/2021-01-26/d19d25bfb4de6b5ec9fd8c11f545e1bc_e981312b539390b571402cdaf3d71e16.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ebayimg.com/images/g/CwEAAOSwv4xf5cdv/s-l1200.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/51A7EGmxK-L._AC_UF1000,1000_QL80_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/61HAyRz8XrS._AC_UF894,1000_QL80_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.fruugo.com/product/8/10/1328458108_max.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/image/850/1000/kdga1zk0/poster/2/p/i/large-breakingbad04-breaking-bad-poster-breaking-bad-series-original-imafuc2fvfjyackz.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.indiewire.com/wp-content/uploads/2023/12/last-of-us-tv-1.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/3/oppenheimer-bo-kev.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://ew.com/thmb/YMLA0vS9UQTRkEmZKxMg8DNxZ1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/brave_disney_510-9f4357afca4d41c3954ab271612fe3f5.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Ahh
