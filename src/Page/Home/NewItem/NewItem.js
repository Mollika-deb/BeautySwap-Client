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
        <div className='mt-52'>
            <h1 className='text-4xl text-center font-semibold my-5' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Our New Items</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 '>
            
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