import React from 'react';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import NewItem from '../NewItem/NewItem';
import Offer from '../Offer/Offer';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';
import SwiperImg from '../Swiper/SwiperImg';
import BestSell from './Bestsell/BestSell';

const Home = () => {
    return (
        <div>
       
          <Banner></Banner>
          <Service></Service>
          <About></About>
          <Category></Category>
          <Offer></Offer>
          <NewItem></NewItem>
          <SwiperImg></SwiperImg>
          <PhotoGallery></PhotoGallery>
         
          <BestSell></BestSell>

          <Gallery></Gallery>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;