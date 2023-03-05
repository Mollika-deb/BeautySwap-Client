import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
       
          <Banner></Banner>
          <About></About>
          <Category></Category>
        </div>
    );
};

export default Home;