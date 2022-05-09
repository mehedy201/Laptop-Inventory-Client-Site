import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product.js/Product';

const Products = () => {
    // use Naigate
    const navigate = useNavigate();
    // Show all Button Handlar
    const showAll = () => {
        navigate('/inventory')
    }

    // Use state and load Product from server
    const [products, setProducts] = useState([]);
    // Fetch Json Data
    useEffect(() =>{
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <div className="row gx-4 py-4">
                {products.slice(0,3).map(product => <Product 
                key={product._id} 
                product={product}>
                </Product>)}
            </div>
            <button onClick={showAll} className='btn btn-secondary text-white d-block mx-auto mb-4'>Show All</button>
        </div>
    );
};

export default Products;