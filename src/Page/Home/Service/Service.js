import React from 'react';
import img1 from '../../../images/money.png'
import img2 from '../../../images/gift.png'
import img3 from '../../../images/time.png'

const Service = () => {
    return (
        <div className='w-[90vw] md:w-[90vw] lg:w-[80vw] mx-auto my-16 md:my-16 lg:my-32 overflow-hidden'>
            <h2 className='text-3xl md:3xl lg:text-5xl text-center ' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>Why Choose Us</h2>
            <h2 className='text-3xl text-center font-semibold pt-4 mb-7 text-gray-700' style={{ fontFamily: 'Playfair Display',   }}>Countless Experience</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                <div className='border border-orange-700 rounded-md p-5'>
                <div className='  '>
               <div className='flex justify-center'>
               <img className='h-28 w-28 self-center' src= {img1} alt="Shoes" />
               </div>
                <h1 className='text-2xl font-bold  text-center py-2' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>Cash Back</h1>
                </div>
                <p className='text-center  text-sm'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
                <div className='border border-orange-700 rounded-md p-5'>
                <div className='  '>
               <div className='flex justify-center'>
               <img className='h-28 w-28 self-center' src= {img2} alt="Shoes" />
               </div>
                <h1 className='text-2xl font-bold  text-center py-2' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>Gift Coupon</h1>
                </div>
                <p className='text-center  text-sm'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
                <div className='border border-orange-700 rounded-md p-5'>
                <div className='  '>
               <div className='flex justify-center'>
               <img className='h-28 w-28 self-center' src= {img3} alt="Shoes" />
               </div>
                <h1 className='text-2xl font-bold  text-center py-2' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>24/7 Service</h1>
                </div>
                <p className='text-center  text-sm'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
               
               
            </div>
        </div>
    );
};

export default Service;