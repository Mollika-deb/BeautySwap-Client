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
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu mt-20 p-4 w-80 bg-pink-50  mr-10 ml-14 rounded-xl tsxt-white">

                    <li className='bg-pink-300 mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard'>My Order</Link></li>
                    {
                         <>
                            <li className='bg-pink-300  mt-10 font-semibold text-2xl rounded-xl'><Link to='/dashboard/allusers'>All Users</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;