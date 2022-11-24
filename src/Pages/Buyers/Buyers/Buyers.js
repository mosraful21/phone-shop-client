import React from 'react';import Navbar from '../../Shared/Navbar/Navbar';
import MyOrders from '../MyOrders/MyOrders';
import MyWishlists from '../MyWishlists/MyWishlists';
;

const Buyers = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MyOrders></MyOrders>
            <MyWishlists></MyWishlists>
        </div>
    );
};

export default Buyers;