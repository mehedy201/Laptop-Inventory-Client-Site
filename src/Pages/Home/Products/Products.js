import React, { useEffect, useState } from 'react';
import Product from './Product.js/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <div className="row gx-4 my-4">
                {products.slice(0,3).map(product => <Product 
                key={product._id} 
                product={product}>
                </Product>)}
            </div>
        </div>
    );
};

export default Products;