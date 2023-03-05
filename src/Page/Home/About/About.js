import React from 'react';
import img1 from '../../../images/about.jpg'
import img2 from '../../../images/about3.jpg'
import './About.css'

const About = () => {
    return (
        <div className='py-40 mb-40 ' style={{backgroundColor:' #faf0e6'}}>
            <div className=' lg: mx-20 ' >
            <div className='about grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10   items-center justify-center text-center'>
                <div  data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={img1} alt="" />
                </div>
                <div className=''  data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                    <p className='font-semibold'>Beauty Bin's story</p>
                    <h1 className='text-5xl font-bold py-3'>About Us</h1>
                    <p className='text-xl font-semibold pt-3'>A relaxing and pleasant atmosphere, good jazz, dinner and cocktails. The PatioTime Bar opens in the centre of Florence. The only bar inspired by the 1960s, it will give you a cocktail experience that you’ll have a hard time forgetting.</p>
                </div>
                <div  data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;