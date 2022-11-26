import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({categoryData}) => {
    const { _id, category, img } =  categoryData;
    return (
        <div className="card card-compact w-96 h-3/4 shadow-xl p-3">
                <figure><img src={img} alt="data" /></figure> 
            <div className="card-body">
                <h2 className="card-title justify-center">Brand : {category}</h2>
               
                <div className="card-actions justify-center">
                    <Link to={`/categoryDetails/${_id}`}>
                        <button className='border-2 rounded bg-blue-600 text-white px-4 py-1 '>View All Products</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;