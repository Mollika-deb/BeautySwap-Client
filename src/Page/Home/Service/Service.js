import React from 'react';
import img1 from '../../../images/money.png'
import img2 from '../../../images/gift.png'
import img3 from '../../../images/time.png'

const Service = () => {
    return (
        <div className='mx-10 my-32'>
            <h2 className='text-5xl text-center ' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>Why Choose Us</h2>
            <h2 className='text-3xl text-center font-semibold pt-4 pb-7 text-gray-700' style={{ fontFamily: 'Playfair Display',   }}>Countless Experience</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-6 '>
                <div className='shadow-2xl  p-7'>
                <div className='grid lg:grid-cols-3   '>
                <img  src= {img1} alt="Shoes" />
                <h1 className='text-3xl font-bold ' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>MoneyBack</h1>
                </div>
                <p className='ml-32'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
               <div  className=' shadow-2xl p-7'>
               <div className='grid lg:grid-cols-3 gap-4 '>
                <img  src= {img2} alt="Shoes" />
                <h1 className='text-3xl font-bold text-orange-600' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>GiftCoupon</h1>
                </div>
                <p className='ml-32 mt-0'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
               </div>
                <div  className=' shadow-2xl p-7'>
                <div className='flex '>
                <img  src= {img3} alt="Shoes" />
                <h1 className='text-3xl font-bold ml-16 text-orange-600' style={{ fontFamily: 'Playfair Display ', color:'#965a3e'  }}>24/7 Service
</h1>
                </div>
                <p className='ml-32'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;