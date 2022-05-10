import React from 'react';
import BestProduct from './BestProduct/BestProduct';
import Products from './Products/Products';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h3 className='py-4 text-center'>Inventory</h3>
            <Products></Products>
            <BestProduct></BestProduct>
        </div>
    );
};

export default Home;