import React from 'react';

const NewItemCard = ({item}) => {
    const {img, title, resale_price, location, original_peice} = item
    return (
        <div className="  border mt-5 rounded-md" data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="3000">
        <img src={img} className='h-52  w-full rounded-t-md' alt="Movie" />
        <div className="ml-5">
            <h2 className=" text-xl font-bold py-3" style={{ fontFamily: 'Libre Baskerville', color: '#965a3e' }}>Product Name:  {title}</h2>
            <div className='text-sm font-semibold' style={{ fontFamily: 'Libre Baskerville', }}>
                <p>resale Price:  {resale_price} <br /></p>
                <p>original Price:  {original_peice}</p>
               

                <p>Metting Location:  {location}</p>
            </div>
            <div className="card-actions justify-start">
                
                   
                    
                        <button className="btn btn-outline btn-sm text-orange-900 hover:bg-pink-400 hover:text-black my-5">Order Now</button>
                    
                
            </div>
        </div>
    </div>
    );
};

export default NewItemCard;