import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Categories></Categories>
            <Team></Team>
        </div>
    );
};

export default Home;