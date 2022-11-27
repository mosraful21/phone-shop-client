import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>

                    <div className='w-full'>
                        <input type="text" defaultValue={user?.displayName} disabled placeholder="name" className="input input-bordered mb-2 w-full max-w-xs" />
                        <input type="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered mb-2 w-full max-w-xs" />
                        <input type="text" placeholder="product_name" className="input input-bordered mb-2 w-full max-w-xs" />
                        <input type="text" placeholder="resalePrice" className="input input-bordered mb-2 w-full max-w-xs" />
                        <input type="text" placeholder="location" className="input input-bordered mb-2 w-full max-w-xs" />
                        <input type="text" placeholder="phone" className="input input-bordered mb-2 w-full max-w-xs" />
                    </div>
                    <div className='flex justify-center'>
                        <button className="btn btn-info">Buy Now</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BookingModal;