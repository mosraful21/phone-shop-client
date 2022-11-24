import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const { img, productName, originalPrice, resalePrice, use } = category;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl p-3">
            <figure><img src={img} alt="place" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{productName}</h2>
                <p className='text-orange-600 font-semibold'>Original Price: {originalPrice}</p>
                <p className='text-orange-600 font-semibold'>Resale Price: {resalePrice}</p>
                <p className='text-orange-600 font-semibold'>Used : {use}</p>
                <div className="card-actions justify-end">
                    <Link to='/'>
                        <button className='border-2 rounded bg-blue-600 text-white px-4 py-1'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;


{/* <Link to={`/details/${_id}`}>
    <button className='border-2 rounded bg-blue-600 text-white px-4 py-1'>Details</button>
</Link> */}