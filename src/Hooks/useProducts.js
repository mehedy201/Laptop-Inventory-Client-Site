import { useEffect, useState } from "react";

const useProducts = () => {
    // Use state and load Product from server
    const [products, setProducts] = useState([]);
    // Fetch Json Data
    useEffect(() =>{
        fetch('https://pure-eyrie-65907.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}

export default useProducts;