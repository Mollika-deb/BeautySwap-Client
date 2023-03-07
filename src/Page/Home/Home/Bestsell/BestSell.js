import React from 'react';
import img1 from '../../../../images/sell1.jpg'
import img2 from '../../../../images/about2.jpg'

const BestSell = () => {
    return (
        <div className="hero max-h-fit pb-48 mb-60 bg-pink-50">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={img1} alt="" className="rounded-lg w-3/5 h-1/2 shadow-2xl" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
         <img src={img2} alt="" className="absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
         </div>
          <div className='w-1/2 ml-20'>
            <h1 className="text-5xl font-bold mt-32" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>See Our Top Selling  <span className='my-5 text-pink-400'> Products!</span> </h1>
            <h1 className="text-5xl mt-5 text-gray-700 font-semibold">Happy Shoping With Us!!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-outline text-pink-400 hover:bg-pink-200 hover:text-black mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default BestSell;