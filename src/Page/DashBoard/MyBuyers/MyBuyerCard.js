import React from 'react';

const MyBuyerCard = ({ buyer }) => {
    const { name, email } = buyer
    return (
        <div className="card  bg-pink-50 shadow-xl text-black">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Buyer Name: {name}</h2>
                <p>Buyer email: {email}</p>
                
            </div>
        </div>
    );
};

export default MyBuyerCard;