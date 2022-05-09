import { useEffect, useState } from "react";

const useProducts = () => {
    // Use state and load Product from server
    const [products, setProducts] = useState([]);
    // Fetch Json Data
    useEffect(() =>{
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}

export default useProducts;