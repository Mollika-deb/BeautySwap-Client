import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Page/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
        <Navbar></Navbar> 

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
               
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu mt-20 p-4 w-80   lg:mr-10 lg:ml-14 rounded-xl tsxt-white">

                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/myorder'>My Order</Link></li>
                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/addproducts'>Add a Product</Link></li>
                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/myproducts'>My Products</Link></li>
                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/mybuyer'>My Buyers</Link></li>
                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/allseller'>All Sellers</Link></li>
                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
                    <li className='bg-pink-200 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/reporteditem'>Reported Items</Link></li>
                   
                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;