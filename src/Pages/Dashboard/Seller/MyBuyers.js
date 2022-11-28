import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBuyers = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-3xl font-bold py-5'>My Buyers: </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;