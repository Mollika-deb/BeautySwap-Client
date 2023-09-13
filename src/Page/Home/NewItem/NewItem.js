import React, { useEffect, useState } from 'react';
import NewItemCard from './NewItemCard';

const NewItem = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('newItem.json')
        .then(res => res.json())
        .then(data => setItems(data))

    },[])

    return (
        <div className='mt-16 lg:mt-32  w-[90vw] md:[90-vw] lg:w-[80vw] mx-auto overflow-hidden'>
            <h1 className='text-4xl text-center font-semibold my-5' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Our New Items</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10'>
            
                {
                    items.map(item =><NewItemCard
                    kew={item.id}
                    item={item}
                    >

                    </NewItemCard>)
                }
            </div>
        </div>
    );
};

export default NewItem;