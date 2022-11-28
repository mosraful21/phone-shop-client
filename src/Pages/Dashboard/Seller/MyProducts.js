import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const { data: SellerProduct = [], refetch } = useQuery({
        queryKey: ['SellerProduct'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })


    // delete product
    const handleDelete = product => {
        fetch(`http://localhost:5000/myproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Product Deleted Successfully')
                    refetch();
                }

            })

    }
    // handle advertise items
    const handleAdvertiseItem = product =>{
        const advertise = {
            productName: product.productName,
            sellerName: product.sellerName,
            resalePrice: product.resalePrice,
            location: product.location,
            condition: product.condition,
            used: product.used,
            
        }
        console.log(advertise);
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product add to advertised list!!');
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold py-5'>My Products:</h2>
            <div>
                {
                    SellerProduct.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>You Have not add any Products</h2> :
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-5 md:m-20'>
                            {
                                SellerProduct.map(product => <div key={product._id} className="card w-full shadow-2xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Product Name: {product.productName}</h2>
                                        <h2 className='text-xl'>Seller Name: {product.sellerName}</h2>
                                        <h2 className='text-xl'>Resale Price: {product.resalePrice} BDT</h2>
                                        <h2 className='text-xl'>Original Price: {product.originalPrice} BDT</h2>
                                        <h2 className='text-xl'>Location: {product.location}</h2>
                                        <h2 className='text-xl'>Current Condition: {product.condition}</h2>
                                        <h2 className='text-xl'>Used Time: {product.used}</h2>
                                        <div className='flex justify-evenly mt-10'>

                                            <Link onClick={() => handleDelete(product)}>
                                                <button className="btn bg-red-700">Delete</button>
                                            </Link>
                                            <Link>
                                                <button className="btn btn-secondary">Available</button>
                                            </Link>
                                            <Link>
                                                <button onClick={()=>handleAdvertiseItem(product)} className="btn btn-primary">Advertise</button>
                                            </Link>
                                            
                                            
                                        </div>

                                    </div>
                                </div>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyProducts;