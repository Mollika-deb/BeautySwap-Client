import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';

const AllCategoy = () => {
    const products = useLoaderData();
    const [poducts, setProducts] = useState([])


    return (
        <div>
            <h1>pkfdokk</h1>
            {
                 
                    products.map(product => <AllProducts
                         id= {product._id}
                        product={product}
                       
                        ></AllProducts>)
                   
            }
        </div>
    );
};

export default AllCategoy;