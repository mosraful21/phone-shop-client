import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='rounded mb-12 shadow-2xl'>
        <div className='text-center mb-4'>
            <h1 className='text-3xl text-center font-bold'>Product Categories</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
            {
                categories.map(categoryData => <CategoriesCard
                    key={categoryData._id}
                    categoryData={categoryData}
                    setProduct= {setProduct}
                    product={product}
                ></CategoriesCard>)
            }
        </div>
    </div>
    );
};

export default Categories;