import React from 'react';
import img1 from '../../../images/jewwlry1.jpg'
import img2 from '../../../images/makeup7.jpg'
import img3 from '../../../images/bag2.jpg'



const Offer = () => {
    return (
        <div className='bg-pink-50 pb-10'>
            <div>
                <h1 className='text-5xl text-center font-bold pt-20' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>See Our Offers</h1 >
                <p className='text-2xl text-center font-semibold pt-3 pb-20 text-gray-600'>Buy Your Favourite Products</p>
            </div>
            <div className="w-full mb-5 " >
                <div className='mx-20 my-3 p-5 grid lg:grid-cols-2 gap-5 '>
                    <div>
                        <img src={img2} alt="" className='w-3/4 h-auto' style={{ height: "550px" }} data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                            <h1 className="text-5xl font-bold" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>20% Flat Disscount</h1>
                            <h1 className="text-4xl py-3 font-semibold text-gray-600">On makeup Products</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-outline text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-10" >
                <div className='mx-20 my-3 p-5 grid lg:grid-cols-2 gap-5 '>

                    <div className='flex justify-center items-center'>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <h1 className="text-5xl font-bold" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>20% Flat Disscount</h1>
                            <h1 className="text-4xl py-3  font-semibold text-gray-600">On Bags & watch </h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-outline text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Get Started</button>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <img src={img3} alt="" className='w-3/4 h-auto' style={{ height: "550px" }} data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500" />
                    </div>
                </div>
            </div>

            <div className="w-full mb-10 " >
                <div className='mx-20  p-5 grid lg:grid-cols-2 gap-5 '>
                    <div>
                        <img src={img1} alt="" className='w-3/4 h-auto' style={{ height: "550px" }} data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <h1 className="text-5xl font-bold" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>20% Flat Disscount</h1>
                            <h1 className="text-4xl py-3 font-semibold text-gray-600">On Jewelry Products</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-outline text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;