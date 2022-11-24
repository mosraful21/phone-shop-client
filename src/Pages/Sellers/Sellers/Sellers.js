import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddProduct from '../AddProduct/AddProduct';
import MyBuyers from '../MyBuyers/MyBuyers';
import MyProducts from '../MyProducts/MyProducts';

const Sellers = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AddProduct></AddProduct>
            <MyProducts></MyProducts>
            <MyBuyers></MyBuyers>
        </div>
    );
};

export default Sellers;