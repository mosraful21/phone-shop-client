import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
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
                            <th>Phone</th>
                            <th>Resale Price</th>
                            <th>Meeting Location</th>

                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map((booking, i) =>
                            <tr key={i}>
                            <th>{i+1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.productName}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.resalePrice}</td>
                            <td>{booking.location}</td>
                        </tr>
                        )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;