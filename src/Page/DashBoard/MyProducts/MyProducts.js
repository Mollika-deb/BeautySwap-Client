import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
const {user} = useContext(AuthContext)
const [products, setProducts] = useState([])


useEffect(()=>{
    if (user && user.email) { // add null check for user object
        fetch(`http://localhost:5000/addproduct?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }
},[user?.email])
 
    return (
      <div className='my-20'>
          <h1 className='text-4xl text-center font-semibold my-5' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>See Your Order</h1>
            <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'></div>
      

        <div className='grid lg:grid-cols-1 gap-5 md:grid-cols-1 sm:grid-cols-1' >
            {
                products.map(product =><MyProductsCard
                kye={product._id}
                product = {product}
                ></MyProductsCard>)
            }
        </div>
        </div>
    );
};

export default MyProducts;