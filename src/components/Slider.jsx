import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowRight from '../img/arrow_1.png';
import 'swiper/css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import feature1 from '../img/feature_pic_1.png'
import feature2 from '../img/feature_pic_2.png'
import feature3 from '../img/feature_pic_3.png'
import feature4 from '../img/feature_pic_4.png'
import addition from '../img/add_2.png'

export default function Slider() {

  return (
    <div className='slider'>
        <img className='slider_addition' src={addition} alt="pic" />
        <Swiper
            grabCursor={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
            <SwiperSlide><img className='swiper_img feature-preview-img' src={feature1} alt="1"/></SwiperSlide>
            <SwiperSlide><img className='swiper_img feature-preview-img' src={feature2} alt="2"/></SwiperSlide>
            <SwiperSlide><img className='swiper_img feature-preview-img' src={feature3} alt="3"/></SwiperSlide>
            <SwiperSlide><img className='swiper_img feature-preview-img' src={feature4} alt="4"/></SwiperSlide>
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <img className='arrow-left' src={arrowRight} alt="arrow" />
                </div>
                <div className="swiper-button-next slider-arrow">
                    <img className='arrow-right' src={arrowRight} alt="arrow" />
                </div>
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
    </div>
  )
}
