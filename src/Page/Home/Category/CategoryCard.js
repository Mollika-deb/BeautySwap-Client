import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'

const CategoryCard = ({category}) => {
    const { id, category_title, category_Url } = category
    return (
        <div className="newCard shadow-2xl">
  
    <img  src={category_Url} alt="Shoes" className=" " />
 
  <div className="newCard-body">
    <h2 className="text-3xl font-bold text-pink-100">{category_title}</h2>
    
         <div className='flex justify-center items-center'>
         <Link to={`/categories/${id}`}><button className="btn btn-outline text-white hover:bg-pink-200 hover:text-black mt-5">See All</button></Link>
         </div>
    </div>
 
</div>
    );
};

export default CategoryCard;