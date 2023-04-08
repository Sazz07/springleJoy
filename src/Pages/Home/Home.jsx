import React from 'react';
import Categories from '../Categories/Categories';
import FeaturesProduct from '../FeaturesProduct/FeaturesProduct';
import Summary from '../Summary/Summary';
import Cta from '../Cta/Cta';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <FeaturesProduct></FeaturesProduct>
            <Cta></Cta>
            <Summary></Summary>
        </div>
    );
};

export default Home;