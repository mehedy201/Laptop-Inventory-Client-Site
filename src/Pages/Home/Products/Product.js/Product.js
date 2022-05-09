import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    // Distractur Product Data    
    const {_id, name, price, img, des, quantity} = product;
    // Use Navigate
    const navigate = useNavigate();
    // Single Product page
    const singleProduct = id => {
        navigate(`/inventory/${id}`)
    }

    return (

        <div className="col-md-4">
            <div className="product shadow for_radius">
                <img src={img} alt="" />
                <div className="info py-2 px-3">
                    <h5>{name}</h5>
                    <p className='my-1'>Price: ${price}</p>
                    <p>{des}</p>
                    <p>Quantity: {quantity}</p>
                    <div className='d-flex justify-content-between mb-3'>
                        <button className='btn bg-secondary text-white btn-sm'>Delevary</button>
                        <button className='btn bg-secondary text-white btn-sm' onClick={() => singleProduct(_id)}>Update Quantity</button>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Product;