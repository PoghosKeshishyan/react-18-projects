import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadingData();
    }, []);

    const loadingData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
    }

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    )
};