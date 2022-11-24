import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('product-categories.json')
            .then(res => res.json())
            .then(data => console.log(data[0].category.apple))
    }, [])

    return (
        <div className='border-4 rounded mb-12 shadow-2xl'>
            <div className='text-center mb-4'>
                <h1 className='text-3xl text-center font-bold'>Product Categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                {
                    categories.map(category => <CategoriesCard>
                        key={category._id}
                        category={category}
                    </CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;