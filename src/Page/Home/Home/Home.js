import React from 'react';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Offer from '../Offer/Offer';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Subscribe from '../Subscribe/Subscribe';
import SwiperImg from '../Swiper/SwiperImg';

const Home = () => {
    return (
        <div>
       
          <Banner></Banner>
          <About></About>
          <Category></Category>
          <Offer></Offer>
          <SwiperImg></SwiperImg>
          <PhotoGallery></PhotoGallery>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;