import './Banner.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import {Container} from "../../utils/Utils";


const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className={'banner-carousel-wrapper'}>
          <Swiper
            navigation={true}
            pagination={true}
            autoplay={{delay: 1000}}
            loop={true}
            spaceBetween={10}
            draggable={true}
            modules={[Pagination,Navigation]}
            className="banner-swiper">
            <SwiperSlide>
              <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/2.988a32fc2cb5183ecf3d0abd56d8d4d7.svg"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/1.f750064639be81611932305b288222c1.svg"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}
export default Banner