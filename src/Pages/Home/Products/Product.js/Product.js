import React, { useState } from 'react';
import './Product.css'

const Product = ({product}) => {
    const { name, price, img, des, quantity} = product;

    const [newQuantity, setQuantity] = useState(quantity)

    let quntQuantity;
    const handleQuantity = () => {
        const quntQuantity = quantity -1;
        setQuantity(quntQuantity);
    }
    return (

        <div className="col-md-4">
            <div className="product border rounded">
                <img src={img} alt="" />
                <div className="info py-2 px-3">
                    <h5>{name}</h5>
                    <p className='my-1'>Price: ${price}</p>
                    <p>{des}</p>
                    <p>Quantity: {newQuantity}</p>
                    <button onClick={handleQuantity}>Delevary</button>
                    </div>
            </div>
        </div>
    );
};

export default Product;