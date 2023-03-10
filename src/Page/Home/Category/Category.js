import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';




const Category = () => {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('https://beauty-bin-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='mx-10 mb-32'>
            <div className='text-center' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>
                <h1 className='text-5xl text-center  font-bold ' >Our Featured Category!</h1>
                <p className='text-gray-500 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing .  fugiat, <br /> ad expedita harum ipsum iusto, quod ipsa.</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-8' data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">

                    {
                        categories.map(category => <CategoryCard
                            key={category.id}
                            category={category}
                        ></CategoryCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Category;

