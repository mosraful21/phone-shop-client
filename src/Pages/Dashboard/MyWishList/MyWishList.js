import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyWishList = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/wishlist?email=${user?.email}`
    const {data: wishlist = []} = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
        <h2 className="text-3xl font-bold py-5">My Orders: </h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>email</th>
                        <th>Resale Price</th>
                        <th>original Price</th>

                    </tr>
                </thead>
                <tbody>
                   {
                    wishlist.map((wish, i) =>
                        <tr key={i}>
                        <th>{i+1}</th>
                        <td>{wish.name}</td>
                        <td>{wish.productName}</td>
                        <td>{wish.email}</td>
                        <td>{wish.resalePrice}</td>
                        <td>{wish.originalPrice}</td>
                        <td><button className='btn'>Purchase</button></td>
                    </tr>
                    )
                   }
                   
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyWishList;