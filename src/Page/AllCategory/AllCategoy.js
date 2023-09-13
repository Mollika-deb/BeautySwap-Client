import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';
import BookingModals from './BookingModals/BookingModals';

const AllCategoy = () => {
    const products = useLoaderData();
    const [book, setBook] = useState(null)


    return (
        <div className='bg-slate-50'>
            <div className='w-[90vw] md:w-[90vw] lg:w-[80vw] mx-auto '>
           
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
           {
                   
                   products.map(product => <AllProducts
                        id= {product._id}
                       product={product}
                      setBook = {setBook}
                       ></AllProducts>)
                  
           }
           </div>
  
              {
                  book &&
                  <BookingModals
                  book = {book}
                  setBook = {setBook}
                  >
  
                  </BookingModals>
              }
          </div>
        </div>
    );
};

export default AllCategoy;