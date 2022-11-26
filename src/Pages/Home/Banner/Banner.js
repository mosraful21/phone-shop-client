import React from 'react';
import img1 from '../../../Assets/images/banner/Samsungg.png';
import img2 from '../../../Assets/images/banner/xiaomi.png';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        id: 1,
        prev: 3,
        next: 2
    },
    {
        image: img2,
        id: 2,
        prev: 1,
        next: 1
    }

]

const Banner = () => {
    return (
        <div className="carousel w-full py-10 bg-slate-500">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;