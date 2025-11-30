import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amount = cart.reduce((acc, elem) => acc += elem.amount, 0);
        setAmount(amount);

        const total = cart.reduce((acc, elem) => acc + elem.price * elem.amount, 0);
        setTotal(total);
    }, [cart]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    item.amount = item.amount + 1;
                }

                return item;
            });

            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    };

    const increaseAmount = (id) => {
        const item = cart.find(item => item.id === id);
        addToCart(item, id);
    };

    const decreaseAmount = (id) => {
        const item = cart.find(item => item.id === id);

        if (item.amount - 1 === 0) {
            return removeFromCart(id);
        }

        const newCart = cart.map(item => {
            if (item.id === id) {
                item.amount = item.amount - 1;
            }

            return item;
        });

        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            amount,
            total,
            addToCart, 
            removeFromCart, 
            increaseAmount, 
            decreaseAmount, 
            clearCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}