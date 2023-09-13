import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext) 

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  

    return (
      

      <nav
      
      className={`${sticky ? "sticky top-0  z-50 bg-white shadow-lg transition-all duration-300 backdrop-blur-sm" : ""}`}
      >
         <div className="navbar  text-pink-100 font-semibold text-xl overflow-hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 text-black rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
             
              <li><Link to='/blog'>Blog</Link></li>
              {
           
           user?.uid?
              
               <button onClick={logOut} className="btn btn-outline text-pink-300 hover:bg-pink-200 hover:text-black ">Sign Out</button>
           :
           <>
                  
                  <li><Link to='/signup' className="  ">Sign Up</Link></li>
                  <li><Link to='login' className=" ">Sign In</Link></li>
                  
           </>
     
       
       }
              
              
              
            </ul>
          </div>
          <Link to='/' className=" btn btn-ghost normal-case text-2xl text-black">BeautySwap</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black text-base">
          <li><Link to='/'>Home</Link></li>
              <li><Link to='/dashboard' >Dashboard</Link></li>
             
              <li><Link to='/blog'>Blog</Link></li>
              
          </ul>
        </div>
       
        <div className="navbar-end lg:mr-5">
         
        
        {
           
            user?.uid?
               
                <button onClick={logOut} className="btn btn-outline text-pink-300 hover:bg-pink-200 hover:text-black ">Sign Out</button>
            :
            <>
                   
                   <Link to='/signup' className=" text-black text-base hidden lg:block">Sign Up</Link>
                   <Link to='login' className=" text-black text-base hidden lg:block lg:ml-5">Sign In</Link>
                   
            </>
      
        
        }
        </div>


        <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
      <div className='mt-5 h-2 text-orange-500'>
        <hr/>
        </div>
      </nav>
          );
};

export default Navbar;