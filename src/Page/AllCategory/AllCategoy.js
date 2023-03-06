import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';
import BookingModals from './BookingModals/BookingModals';

const AllCategoy = () => {
    const products = useLoaderData();
    const [book, setBook] = useState(null)


    return (
        <div>
            <h1>pkfdokk</h1>
            {
                 
                    products.map(product => <AllProducts
                         id= {product._id}
                        product={product}
                       setBook = {setBook}
                        ></AllProducts>)
                   
            }

            {
                book &&
                <BookingModals
                book = {book}
                setBook = {setBook}
                >

                </BookingModals>
            }
        </div>
    );
};

export default AllCategoy;