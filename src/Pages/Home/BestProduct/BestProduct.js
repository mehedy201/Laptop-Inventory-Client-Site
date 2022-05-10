import React from 'react';
import './BestProduct.css'
import hp from '../../../Images/sliderImage/slider.png';
import asus from '../../../Images/sliderImage/asus.png';

const BestProduct = () => {
    return (
        <div className="container my-4">
            <h2 className='text-center pt-4 pb-3'>Best Products In this Year!!</h2>
            <div className='row gx-4'>
                <div className="col-md-6">
                    <div className="hp_best bg-warning m-1 p-4">
                        <img src={hp} alt="" width={100} />
                        <div className="best_product_info">
                            <h4>Apple Macbook Pro</h4>
                            <p>It's Really very quality full Laptop. If you need long Time batary bacup then Best for you.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hp_best m-1 bg-warning p-4">
                        <img src={asus} alt="" width={100} className='p-2' />
                        <div className="best_product_info">
                            <h4>HP core i7, 11Gen</h4>
                            <p>HP is a worldest top selling Laptop. Hp is best for multitasking work.......</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestProduct;