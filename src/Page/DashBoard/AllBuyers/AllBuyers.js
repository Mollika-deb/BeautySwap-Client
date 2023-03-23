import React, { useEffect, useState } from 'react';
import AllBuyersCard from './AllBuyersCard';

const AllBuyers = () => {

    const [buyers, setBuyers] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/buyer?Role=buyer')
        .then(res => res.json())
        .then(data => setBuyers(data))
    }, [])


    return (
        <div>
            <h1 className='text-3xl lg:text-5xl font-semibold lg:font-bold text-center my-10' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>See All Buyers</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mx-5  mt-5 lg:mx-32 '>
          
        {
            buyers.map(buyer => <AllBuyersCard
            key = {buyer._id}
            buyer = {buyer}
            ></AllBuyersCard>)
        }
       
    </div>
    </div>
    );
};

export default AllBuyers;