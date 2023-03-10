import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard = ({ order }) => {
    const { book_title, resale_price, image_url, saler_name, name, email, location } = order

    return (
        <div className="card card-side bg-pink-50 shadow-xl mt-5 mx-10">
            <figure><img src={image_url} className='h-72  w-96' alt="Movie" /></figure>
            <div className="card-body ml-20">
                <h2 className="card-title text-2xl font-bold" style={{ fontFamily: 'Libre Baskerville', color: '#965a3e' }}>Product Name:  {book_title}</h2>
                <div className='text-1xl font-semibold' style={{ fontFamily: 'Libre Baskerville', }}>
                    <p>resale Price:  {resale_price} <br /></p>
                    <p>Buyer Name:  {name}</p>
                    <p>Seller Name:  {saler_name}</p>

                    <p>Metting Location:  {location}</p>
                </div>
                <div className="card-actions justify-start">
                    {
                        resale_price && !order.paid &&
                        <Link to={`/dashboard/payment/${order._id}`}>
                            <button className="btn btn-outline btn-sm text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Pay Now</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;