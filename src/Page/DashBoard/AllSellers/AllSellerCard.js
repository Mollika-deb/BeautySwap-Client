import React from 'react';

const AllSellerCard = ({seller}) => {

    const {name, email} = seller

    return (
        <div className="card  bg-pink-50 shadow-xl text-black">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Buyer Name: {name}</h2>
            <p>Buyer email: {email}</p>
            <div className="card-actions justify-center">
      <button className="btn btn-sm btn-outline">Delete</button>
     
    </div>
        </div>
    </div>
    );
};

export default AllSellerCard;