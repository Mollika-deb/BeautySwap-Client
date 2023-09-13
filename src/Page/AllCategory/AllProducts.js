import React from 'react';

const AllProducts = ({ product, setBook }) => {
    const { book_title, image_url, location, resale_price, original_peice, use_year, post_time, saler_name } = product
    return (
       
        
        <div className='bg-white rounded-md'>
            <img src={image_url} className='h-52 w-full rounded-t-md' alt="Movie" />
           <div className='px-5'>
           <h2 className="card-title text-xl font-bold py-3" style={{ fontFamily: 'Libre Baskerville', color: '#965a3e' }}>{book_title}</h2>

<div className='text-sm font-semibold opacity-90 bg-white' style={{ fontFamily: 'Libre Baskerville', }}>
         <p>resale Price: {resale_price}tk <br /></p>
       
         <p>Original Price: {original_peice}tk</p>
         <p>Saller Name: {saler_name}</p>
         <p>Metting Location: {location}</p>
     </div>
   
    <div className='flex '>
    <label onClick={() =>setBook(product)} htmlFor="booking-modal" className="btn btn-outline btn-sm bg-pink-400 text-white w-56 my-5">Book Now</label>
    </div>

           </div>

        </div>
    );
};

export default AllProducts;