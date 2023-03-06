import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({category}) => {
    const { id, category_title, category_Url } = category
    return (
        <div className="card bg-pink-50 ">
  <figure className=" pt-10">
    <img  src={category_Url} alt="Shoes" className="rounded-xl h-64 w-96" />
  </figure>
  <div className="pb-10 items-center text-center">
    <h2 className=" text-3xl font-semibold my-4 text-gray-500">{category_title}</h2>
    
          <Link to={`/categories/${id}`}><button className="btn  bg-pink-400  w-96">See All</button></Link>
    </div>
 
</div>
    );
};

export default CategoryCard;