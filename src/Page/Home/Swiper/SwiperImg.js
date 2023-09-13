import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './swiper.css'

import slide_image_1 from '../../../images/about.jpg';
import slide_image_2 from '../../../images/about2.jpg';
import slide_image_3 from '../../../images/about3.jpg';
import slide_image_4 from '../../../images/bag1.jpg';
import slide_image_5 from '../../../images/makeup8.jpg';
import slide_image_6 from '../../../images/jewwlry1.jpg';
import slide_image_7 from '../../../images/makeup7.jpg';


const SwiperImg = () => {
    return (
        <div className='w-[90vw] md:w-[90vw] lg:w-[80vw] mx-auto items-center justify-center my-40  sliderImg' >
            <div>
                <h1 className='text-3xl md:text-3xl lg:text-5xl text-center pb-10' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Meet Our Experts</h1>
               
            </div>
            <Swiper
//                

slidesPerView={1}
spaceBetween={10}
centeredSlides={true}
autoplay={{
  delay: 2000,
  disableOnInteraction: false,
}}
loop={true}
breakpoints={{
  640: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}}
modules={[Autoplay, Pagination, Navigation]}

            >

             

                    <SwiperSlide >

                        <img  src={slide_image_1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_6} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_7} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={slide_image_6} alt="slide_image" />
                    </SwiperSlide>
             

            </Swiper >
        </div >
    );
};

export default SwiperImg;