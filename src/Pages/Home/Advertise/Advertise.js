import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import UseAdmin from '../../../Hooks/UseAdmin';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)
    const { data: advertised = [], refetch } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/advertise/${user?.email}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })
    const length = advertised.length;
    if (length === 0) {
        return;
    }
    // delete advertised
    const handleDelete = product => {
        fetch(`http://localhost:5000/advertise/${product._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('advertised Deleted Successfully')
                    refetch();
                }

            })

    }
    return (
        <div>
            {
                advertised.length === 0 ? <h2> </h2>
                    :
                    <>
                        <h2 className="text-3xl text-center font-bold m-8">Advertised Items</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-5 md:m-20'>
                            {
                                advertised.map(product => <div key={product._id} className="card w-full shadow-3xl">
                                    <div className="card-body shadow-2xl">
                                        <h2 className="card-title">Product Name: {product.productName}</h2>
                                        <h2 className='text-xl'>Seller Name: {product.sellerName}</h2>
                                        <h2 className='text-xl'>Resale Price: {product.resalePrice} BDT</h2>
                                        <h2 className='text-xl'>Location: {product.location}</h2>
                                        <h2 className='text-xl'>Current Condition: {product.condition}</h2>
                                        <h2 className='text-xl'>Used Time: {product.used}</h2>
                                        <div className='flex justify-evenly mt-10'>
                                        </div>
                                        <Link>
                                            <button className="btn btn-primary">Book Now</button>
                                        </Link>
                                        {
                                            isAdmin &&
                                            <Link onClick={() => handleDelete(product)}>
                                                <button className="btn bg-red-700">Delete</button>
                                            </Link>
                                        }

                                    </div>
                                </div>)
                            }
                        </div>
                    </>


            }
        </div>
    );
};

export default Advertise;