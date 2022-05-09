import React from 'react';
import './ManageProduct.css'

const ManageProduct = ({product}) => {
    const {name, img, price, quantity} = product
    return (
        <div className='d-flex justify-content-between manage_product my-2 p-2 shadow-sm'>
            <div className='d-flex align-items-center'>
                <img src={img} alt="" />
                <h5 className='me-2'>{name}</h5>
                <p className='mx-2 my-0 p-0'>Price: ${price}</p>
                <p className='mx-2 my-0 p-0'>Quantity: {quantity}</p>
            </div>
            <button className=' btn bg-danger text-white rounded-circle px-3 py-1 me-3'>X</button>
        </div>
    );
};

export default ManageProduct;