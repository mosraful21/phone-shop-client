import React from 'react';
import banner from '../../../assets/images/banner/banner.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';



const Banner = () => {
    return (
        <section className='mb-12'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">
                    <div className='lg:p-10'>
                        <h1 className="text-4xl font-bold">Welcome to Mobile Shop</h1>
                        <p className="py-6">We </p>
                        <PrimaryButton>Buy Now</PrimaryButton>
                    </div>
                    <img src={banner} className="lg:w-1/2 rounded-lg" alt='' />
                </div>
            </div>
        </section>
    );
};

export default Banner;