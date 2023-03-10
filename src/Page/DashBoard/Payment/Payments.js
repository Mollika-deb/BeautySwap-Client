import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRAIPE_PK);


const Payments = () => {
   const order = useLoaderData()
   const { book_title, resale_price, image_url, saler_name, name, email, location } = order


    return (
        <div className='ml-32'>
            <h1 className='text-3xl  text-start font-semibold mt-20' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Pay <span className='font-bold text-pink-400'>{resale_price}</span> TK for <span className='font-bold text-pink-400'> {book_title}</span> </h1>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm  order={order}/>
                   
                </Elements>
            </div>
        </div>
    );
};

export default Payments;