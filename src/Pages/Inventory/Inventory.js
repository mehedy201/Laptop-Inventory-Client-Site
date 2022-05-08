import React, { useEffect, useState } from 'react';
import Product from '../Home/Products/Product.js/Product';
import Products from '../Home/Products/Products';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])

    return (
        <div className='container'>
            <h1 className='text-center pt-4'>All Inventory</h1>
            <div className="row gx-4 my-4">
                {products.map(product => <Product 
                key={product._id} 
                product={product}>
                </Product>)}
            </div>
        </div>
    );
};

export default Inventory;