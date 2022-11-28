import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const used = form.used.value;
        const condition = form.condition.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const sellerName = form.sellerName.value;
        const email = user?.email;

        const product = {
            productName,
            sellerName,
            email,
            originalPrice,
            resalePrice,
            location,
            used,
            condition,
            phone,
        }
        console.log(product)
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Your Product Has Added Successfully');
                    navigate('/dashboard/myproducts')
                }
                console.log(result)
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-bold py-5'>Add a Product</h1>
            <form onSubmit={handleSubmit}>

                <div className="bg-white shadow-lg rounded  md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6"></p>
                    <div className="mt-6 w-full">
                        <label htmlFor="name" className="text-sm font-medium leading-none">
                            {" "}
                            Product Name{" "}
                        </label>
                        <input name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Add Your product name" required />
                    </div>

                    <div className="mt-6 w-full">
                        <label htmlFor="location" className="text-sm font-medium leading-none">
                            {" "}
                            Location{" "}
                        </label>
                        <input name='location' id="location" aria-labelledby="location" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter Your Location" required />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="phone" className="text-sm font-medium leading-none">
                            {" "}
                            Phone{" "}
                        </label>
                        <input name='phone' id="phone" aria-labelledby="location" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter Your phone" required />
                    </div>

                    <div className="mt-6 w-full">
                        <label htmlFor="used" className="text-sm font-medium leading-none">
                            {" "}
                            How many years/months You Used this product?{" "}
                        </label>
                        <input name='used' id="used" aria-labelledby="used" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 1 year / 6 months " required />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="condition" className="text-sm font-medium leading-none">
                            {" "}
                            Condition of the product{" "}
                        </label>
                        <select name='condition' id='condition' className="select w-full my-2 bg-gray-200 border rounded text-xs text-gray-900" required>
                            <option disabled selected>select condition</option>
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>


                    <div className="mt-6 w-full">
                        <label htmlFor="originalPrice" className="text-sm font-medium leading-none">
                            {" "}
                            Original Price{" "}
                        </label>
                        <input name='originalPrice' id="originalPrice" aria-labelledby="originalPrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter Original Price " required />
                    </div>


                    <div className="mt-6 w-full">
                        <label htmlFor="resalePrice" className="text-sm font-medium leading-none">
                            {" "}
                            Sale Price{" "}
                        </label>
                        <input name='resalePrice' id="resalePrice" aria-labelledby="resalePrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter resale price" required />
                    </div>

                    <div className="mt-6 w-full">
                        <label htmlFor="sellerName" className="text-sm font-medium leading-none">
                            {" "}
                            Your Name{" "}
                        </label>
                        <input name='sellerName' disabled defaultValue={user?.displayName} id="sellerName" aria-labelledby="sellerName" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 py-3 w-full pl-3 mt-2 " required />
                    </div>
                    <input className='w-full btn btn-primary mt-10' type="submit" value="Submit" />

                </div>

            </form>
        </div>
    );
};

export default AddProduct;