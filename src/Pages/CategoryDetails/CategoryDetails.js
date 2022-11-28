import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CategoryDetails = () => {
    const { products } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [mobileData, setMobileData] = useState('');

    const handleWishList = (product) => {
        const wishList = {
            name: user.displayName,
            email: user.email,
            productName: product.product_name,
            resalePrice: product.resalePrice,
            originalPrice: product.originalPrice,
        }
        console.log(wishList);
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product add to wishlist!!');
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            name: name,
            email,
            phone,
            productName,
            resalePrice,
            location,
        }
        // and once data is saved then close the modal and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking Confirmed!!');
                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <div>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
                {
                    products.map((product, i) =>
                        <div key={i}>
                            <div className="card w-96 h-5/6 mx-auto shadow-xl">
                                <figure className="px-20 pt-20">
                                    <img className='w-full h-96' src={product.image} alt="Shoes" />
                                </figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title justify-center">{product.product_name}</h2>
                                    <p className='border-2 p-2'>location: {product.location}</p>
                                    <p className='border-2 p-2'>Resale Price: {product.resalePrice} Taka</p>
                                    <p className='border-2 p-2'>Original price: {product.originalPrice} Taka</p>
                                    <p className='border-2 p-2'>Used Duration: {product.usedTime}</p>
                                    <p className='border-2 p-2'>Post Time: {product.postTime}</p>
                                    <p className='border-2 p-2'>Seller Name: {product.sellersName}</p>

                                    <div className="card-actions justify-center flex">
                                        <div>
                                            <input type="checkbox" id="book-modal" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box relative bg-white">
                                                    <label
                                                        htmlFor="book-modal"
                                                        className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center'>
                                                        <input name='name' type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-full mt-6" />
                                                        <input name='email' type="text" disabled defaultValue={user?.email} className="input input-bordered w-full " />
                                                        <input name='productName' type="text" disabled defaultValue={mobileData?.product_name} className="input input-bordered w-full " />
                                                        <input name='resalePrice' type="text" disabled defaultValue={mobileData?.resalePrice} className="input input-bordered w-full" />
                                                        <input required name='phone' type="text" placeholder='Your Phone Number' className="input input-bordered w-full" />
                                                        <input required name='location' type="text" placeholder='Meeting Location' className="input input-bordered w-full " />
                                                        <input htmlFor="book-modal" className='btn btn-primary' type="Submit" value="Submit" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <label onClick={() => setMobileData(product)} htmlFor="book-modal" className="btn btn-primary">Book Now</label>
                                        <button onClick={() => handleWishList(product)} className='btn btn-secondary'>Add to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryDetails;