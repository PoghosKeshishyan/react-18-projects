import { useState } from "react";
import { DetailProduct } from "./DetailProduct";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

export function ProductItem({ product, addToBasket }) {
    const [flag, setFlag] = useState(false);

    return (
        <div className="ProductItem">
            <img src={product.image} alt={product.description} />
            <h2 className="title">{product.title.slice(0, 18)}...</h2>
            <p className="description">{product.description.slice(0, 80)}...</p>
            <p className="price">${(product.price).toFixed(2)}</p>

            <button className="product-btn" onClick={() => addToBasket(product)}>
                <FaShoppingCart />
                Add to cart
            </button>

            <button className="product-btn" onClick={() => setFlag(!flag)}>
                <BsFillEyeFill />
                Detail
            </button>

            {
                flag && (
                    <DetailProduct
                        product={product}
                        addToBasket={addToBasket}
                        setFlag={setFlag}
                    />
                )
            }
        </div>
    )
}
