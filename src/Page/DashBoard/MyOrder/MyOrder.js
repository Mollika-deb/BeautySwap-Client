import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    useEffect(()=>{

        // fetch(`https://beauty-bin-server.vercel.app/order?email=${user.email}`)
        // .then(res => res.json())
        // .then(data => setOrders(data))

        if (user && user.email) { // add null check for user object
            fetch(`https://beauty-bin-server.vercel.app/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
                .catch(err => console.log(err));
        }
    },[user?.email])

    return (
        <div>
            <h1 className='text-4xl text-center font-semibold mt-5' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>See Your Order</h1>
            <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
            {
                orders.map(order => <MyOrderCard
                key = {order.id}
                order = {order}
                ></MyOrderCard>)
            }
        </div>
        </div>
    );
};

export default MyOrder;