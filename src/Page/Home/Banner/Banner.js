import React, { useEffect, useState } from 'react';
import './Banner.css'

import img1 from '../../../images/banner16.jpg'
import img2 from '../../../images/banner13.webp'
import img3 from '../../../images/banner15.jpg'










const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='overflow-hidden'>
      <div className='banner lg:h-[100vh] h-[70vh]'>
        <div className='slider'>
          <img className='h-64 object-cover' id='sliderImg' src={images[currentImage]} alt='' />
        </div>
        <div className='overlay'>
          <div className='content text-center lg:mt-48 mt-20 md:mt-20 lg:w-3/4 mx-auto '>
            <h1 className='lg:text-4xl text-2xl lg:font-bold sm:text-2xl sm:mt-20 text-pink-100 py-2'>Welcome To BeautySwap <br /> & </h1>
            <h1 className='lg:text-5xl text-3xl md:text-3xl font-semibold text-pink-100 pb-4'>Resell Your Unused Beauty Products Here</h1>
            <p className='text-1xl hidden lg:block md:block'>Cosmetics are inhabitable part of women’s lives in today’s world. It adds extra elegance <br /> to our appearance and makes us feel more comfortable and confident...</p>
            <button className="btn btn-outline text-white hover:bg-pink-200 hover:text-black mt-5">Get Started</button>

          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Banner;
  