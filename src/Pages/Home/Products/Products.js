import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from './Product.js/Product';

const Products = () => {
    // use Naigate
    const navigate = useNavigate();
    // Show all Button Handlar
    const showAll = () => {
        navigate('/inventory')
    }

    // Load Data using custom Hooks
    const [products] = useProducts();

    return (
        <div className='container'>
            <div className="row gx-4 py-4 align-items-stretch">
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