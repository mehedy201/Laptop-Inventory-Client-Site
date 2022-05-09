import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './Manage.css'

const Manage = () => {
    // Use Navigate 
    const navigate = useNavigate();
    const updateProduct = id => {
        navigate(`/inventory/${id}`)
    }
    // Load Data using custom hooks
    const [products, setProducts] = useProducts();

    // Handle delet items 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `http://localhost:4000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remain = products.filter(product => product._id !== id);
                setProducts(remain);
            })
        }
    }

    return (
        <div className='container mb-5'>
            <h1 className='text-center my-4'>Manage Itmes</h1>
            <h6>Total Product: {products.length}</h6>
            <div>
                {
                    products.map(product => <div key={product._id}>
                         <div className='d-md-flex justify-content-between manage_product my-2 p-2 shadow-sm'>
                            <div className='d-flex align-items-center'>
                                <img src={product.img} alt="" />
                                <h5 className='me-2'>{product.name}</h5>
                                <p className='mx-2 my-0 p-0'>Price: ${product.price}</p>
                                <p className='mx-2 my-0 p-0'>Quantity: {product.quantity}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-2 m-md-0'>
                            <button onClick={() => updateProduct(product._id)} className='btn btn-sm bg-secondary text-white'>Update Product</button>
                            <button onClick={() => handleDelete(product._id)} className=' btn btn-sm bg-danger text-white rounded-circle px-2 py-1 mx-3'>X</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manage;