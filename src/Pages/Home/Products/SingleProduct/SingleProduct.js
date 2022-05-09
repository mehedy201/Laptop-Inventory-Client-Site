import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = () => {
    // Get Id using useParams
    const {productid} = useParams();
    // Declare useState for Single Product
    const [singleProduct, setSingleProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/products/${productid}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    },[]);
    console.log(singleProduct)
    const { name, price, img, des, quantity} = singleProduct;
    return (
        <div className='container'>
            <div className="row gx-4 gy-4 single_product my-5">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className='border for_border_radius shadow'>
                        <img src={img} alt="" />
                        <div className="py-3 px-4">
                            <h4>{name}</h4>
                            <p>Price: ${price}</p>
                            <p>Short Descripton: {des}</p>
                            <p>Quantity: {quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 m-auto update_infor">
                    <input className='form-control inputs' type="number" name="" id="" />
                    <button className='btn btn-secondary'>Update Quantity</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;