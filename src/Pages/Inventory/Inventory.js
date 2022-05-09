import useProducts from '../../Hooks/useProducts';
import Product from '../Home/Products/Product.js/Product';


const Inventory = () => {

    // Get Data using Custom hooks
    const [products] = useProducts();

    return (
        <div className='container'>
            <h1 className='text-center pt-4'>All Inventory</h1>
            <div className="row gx-4 gy-4 my-4">
                {products.map(product => <Product 
                key={product._id} 
                product={product}>
                </Product>)}
            </div>
        </div>
    );
};

export default Inventory;