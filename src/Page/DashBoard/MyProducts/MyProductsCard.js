import React from 'react';

const MyProductsCard = ({product}) => {
    const{title,price,description, img , category, condition,location,  year,  phone, email } = product
    return (
        <div className="card card-side bg-pink-50 shadow-xl  lg:mx-10 sm:grid-flow-row">
           <div className='sm:grid sm:grid-cols-1 lg:flex'>
          <div>
          <figure><img src={img} className='h-72  w-96' alt="Movie" /></figure>
          </div>
          
            <div className="card-body lg:ml-20">
                <h2 className="card-title text-2xl font-bold" style={{ fontFamily: 'Libre Baskerville', color: '#965a3e' }}>Product Name:  {title}</h2>
                <div className='text-1xl font-semibold' style={{ fontFamily: 'Libre Baskerville', }}>
                    <p>resale Price:  {price}Tk<br /></p>
                    <p>Product Condition:  {condition}</p>
                    <p>Location:  {location}</p>
                    <p>Product Category:  {category}</p>
                    <p>Used Year:  {year} Months</p>
                    <p>Details:  {description.slice(0, 40)}...</p>
                </div>

                <div className="card-actions justify-start">
                   
                            <button className="btn btn-outline btn-sm text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Pay Now</button>
                     
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default MyProductsCard;