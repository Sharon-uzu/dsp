import React from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../Images/homi 1.png';
import { Link } from 'react-router-dom';



const Memories = () => {
  return (
    <div className='memories'>
        <h1>Memories from Previous Program </h1>

        <div className='slide'>
        <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        // pagination={{ clickable: true }}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
      >
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt=""  className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt=""  className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className='acc'/>
        </SwiperSlide>
      </Swiper>

    </div>

    <Link to='/form'><button type="button" className='enrollment'>Enroll Now</button></Link>


    </div>
  )
}

export default Memories