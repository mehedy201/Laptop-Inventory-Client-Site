import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ManageProduct from './ManageProduct/ManageProduct';

const Manage = () => {
    // Load Data using custom hooks
    const [products] = useProducts();

    return (
        <div className='container mb-5'>
            <h1 className='text-center my-4'>Manage Itmes</h1>
            <h6>Total Product: {products.length}</h6>
            <div>
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default Manage;