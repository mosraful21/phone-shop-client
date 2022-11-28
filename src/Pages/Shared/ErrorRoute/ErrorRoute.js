import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/404.png';

const ErrorRoute = () => {
    return (
        <div>
            <img className='w-1/2 h-1/2 m-auto' src={img} alt="" />
            <div className='flex justify-center mt-12'>
                <Link to='/'> <button className='btn btn-wide'> Home </button></Link>
            </div>
        </div>
    );
};

export default ErrorRoute;