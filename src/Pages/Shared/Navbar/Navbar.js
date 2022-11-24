import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    const menuItem =
        <>
            <li className='font-semibold text-xl'> <Link to='/'>Home</Link> </li>
            <li className='font-semibold text-xl'> <Link to='/category'>Category</Link> </li>
            <li className='font-semibold text-xl'> <Link to='/blog'>Blog</Link> </li>
            <li className='font-semibold text-xl'> <Link to='/login'>Login</Link> </li>

        </>

    return (
        <div className="navbar bg-blue-500 text-neutral-content p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-neutral text-neutral-content">
                        {menuItem}
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-24 h-16' src={logo} alt="logo" />
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">Buy & Sell</Link>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;