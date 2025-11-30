import { useEffect, useState } from "react"
import { Basket } from "../components/Basket";
import { Loading } from '../components/Loading';
import { ProductList } from "../components/ProductList";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export function HomePage() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [showBasket, setShowBasket] = useState(false);
    const [basketAmount, setBasketAmount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const amount = orders.reduce((sum, elem) => sum + elem.quantity, 0);
        setBasketAmount(amount);
    }, [orders])

    const addToBasket = (product) => {
        const index = orders.findIndex(order => order.id === product.id);

        if (index === -1) {
            const newOrder = { ...product, quantity: 1 };
            setOrders([...orders, newOrder]);
            return;
        }

        const newOrders = orders.map((order, i) => {
            if (i === index) {
                order.quantity = order.quantity + 1;
            }

            return order;
        })

        setOrders(newOrders);
    }

    const plus = (id) => {
        const newOrders = orders.map(order => {
            if (order.id === id) {
                order.quantity = order.quantity + 1;
            }
            
            return order;
        });

        setOrders(newOrders);
    }

    const minus = (id) => {
        const index = orders.findIndex(order => order.id === id);

        const newOrders = orders.map(order => {
            if (order.id === id) {
                order.quantity = order.quantity - 1;
            }
            
            return order;
        });

        if (newOrders[index].quantity <= 0) {
            return remove(id);
        }

        setOrders(newOrders);
    }

    const remove = (id) => {
        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
    }

    const removeAll = () => {
        setOrders([]);
    }

    return (
        <div className="HomePage">
            {loading && <Loading />}

            <div className="shopping-cart" onClick={() => setShowBasket(!showBasket)}>
                <PiShoppingCartSimpleBold />
                <p>{basketAmount}</p>
            </div>

            {
                showBasket && (
                    <Basket 
                      orders={orders} 
                      plus={plus} 
                      minus={minus} 
                      remove={remove} 
                      removeAll={removeAll} 
                      showBasket={showBasket}
                      basketAmount={basketAmount}
                      setShowBasket={setShowBasket}
                    />
                )
            }

            <ProductList products={products} addToBasket={addToBasket} />
        </div>
    )
}