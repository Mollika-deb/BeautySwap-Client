import React from 'react';
import img from '../../../images/brush2.jpg'

const Subscribe = () => {
    return (
        <div className="h-96  relative">
            <img className='w-full h-full object-cover' src={img} alt="" />
            <div className="absolute inset-0 bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-neutral-content">
                <div className="max-w-md" data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <h1 className="lg:mb-5 lg:text-5xl font-bold text-pink-200"  style={{ fontFamily: 'Libre Baskerville', }}>Subscribe Now!</h1>
                    <p className="mb-5">& Get Unlimited Offer</p>
                    <div className='lg:flex items-center'>
                    <input type="text" placeholder="Type here" className="input input-bordered input-warning bg-black w-full max-w-xs" />
                    <button className="btn  btn-outline text-white hover:bg-pink-200 hover:text-black ml-5">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;