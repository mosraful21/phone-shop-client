import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';

const CategoryDetails = () => {
    const { products } = useLoaderData();
    return (
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
            {
                products.map((product, i) =>
                    <div key={i}>
                        <div className="card h-5/6 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.product_name}</h2>
                                <div className='grid gap-1 grid-cols-2'>
                                    <p>location: {product.location}</p>
                                    <p>Resale Price: {product.resalePrice}</p>
                                    <p>Original price: {product.originalPrice}</p>
                                    <p>Used Duration: {product.usedTime}</p>
                                    <p>Post Time: {product.postTime}</p>
                                    <p>Seller Name: {product.sellersName}</p>
                                </div>
                                <div className="card-actions">
                                    <label htmlFor="booking-modal" className="btn btn-primary text-white">Book Now</label>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <BookingModal></BookingModal>
        </div>
    );
};

export default CategoryDetails;