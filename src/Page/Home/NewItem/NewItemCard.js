import React from 'react';

const NewItemCard = ({item}) => {
    const {img, title, resale_price, location, original_price} = item
    return (
        <div className="card card-side bg-pink-50 shadow-xl mt-5 mx-10" data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="3000">
        <figure><img src={img} className='h-72  w-96' alt="Movie" /></figure>
        <div className="card-body ml-5">
            <h2 className="card-title text-2xl font-bold" style={{ fontFamily: 'Libre Baskerville', color: '#965a3e' }}>Product Name:  {title}</h2>
            <div className='text-1xl font-semibold' style={{ fontFamily: 'Libre Baskerville', }}>
                <p>resale Price:  {resale_price} <br /></p>
                <p>0riginal Price:  {original_price}</p>
               

                <p>Metting Location:  {location}</p>
            </div>
            <div className="card-actions justify-start">
                {
                   
                    
                        <button className="btn btn-outline btn-sm text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Order Now</button>
                    
                }
            </div>
        </div>
    </div>
    );
};

export default NewItemCard;