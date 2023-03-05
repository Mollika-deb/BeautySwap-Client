import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';


const Category = () => {
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])


    return (
        <div>
            <h1>kjerhfjkh</h1>
          <div>
            {
                categories.map(category => <CategoryCard
                key={category.id}
                category={category}
                ></CategoryCard>)
            }
          </div>
        </div>
    );
};

export default Category;