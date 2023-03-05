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
    <div>
      <div className='banner'>
        <div className='slider'>
          <img id='sliderImg' src={images[currentImage]} alt='' />
        </div>
        <div className='overlay'>
          <div className='content text-center mt-48 w-3/4 mx-auto '>
            <h1 className='text-4xl font-bold text-pink-100 py-2'>Welcome To BeautySwap <br /> & </h1>
            <h1 className='text-5xl font-semibold text-pink-100 pb-4'>Resell Your Unused Beauty Products Here</h1>
            <p className='text-1xl'>Cosmetics are inhabitable part of women’s lives in today’s world. It adds extra elegance <br /> to our appearance and makes us feel more comfortable and confident...</p>
            <button className="btn btn-outline text-white hover:bg-pink-200 hover:text-black mt-5">Get Started</button>

          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Banner;
  