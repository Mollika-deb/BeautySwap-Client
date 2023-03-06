import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
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
        <div className=' mx-10 items-center justify-center my-40  sliderImg' data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div>
                <h1 className='text-5xl text-center ' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Follow Our Trending Items</h1>
                <h1 className='text-center text-3xl text-gray-700 font-semibold py-5'>Buy And Get Discount</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true} // Set loop to true
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

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
             

            </Swiper >
        </div >
    );
};

export default SwiperImg;