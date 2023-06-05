import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./infra.css"


export const Infrastructure = () => {
  return (
    <div className='container-fluid organization-box my-5'>

      <div className='row'>

        <div className='col-lg-6 organization-text'>
          <h1>STATE <br />
            OF THE ART <br />
            INFRASTRUCTURE</h1>
        </div>
        
        <div className='col-lg-6 organization-image'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2700,
              disableOnInteraction: false,
            }}


            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide> <img src="soft.jpg" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="soft1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="soft2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="soft3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="soft4.jpg" alt="" /></SwiperSlide>

          </Swiper>

        </div>
      </div>
    </div>
  )
}
