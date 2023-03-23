import React, { useEffect, useState } from 'react';
import AllSellerCard from './AllSellerCard';

const AllSellers = () => {

    const [sellers, setSellers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/seller?Role=seller')
        .then(res => res.json())
        .then(data => setSellers(data))
    },[])

    return (
        <div>
                <h1 className='text-3xl lg:text-5xl font-semibold lg:font-bold text-center my-10' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>See All Sellers</h1>
           
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mx-5  mt-5 lg:mx-32  '>
            
            {
                sellers.map(seller => <AllSellerCard
                key = {seller._id}
                seller = {seller}
                ></AllSellerCard>) 
            }
        </div>
        </div>
    );
};

export default AllSellers;