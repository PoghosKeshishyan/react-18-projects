import { FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export function DetailProduct({ product, addToBasket, setFlag }) {
    return (
        <div className="DetailProduct">
            <button className="close-btn" onClick={() => setFlag(false)}>
                <FaXmark />
            </button>

            <div className="row">
                <img src={product.image} alt={product.title} />

                <div className="content">
                    <h2 className="detail-title">{product.title}</h2>
                    <p className="detail-description">{product.description}</p>
                    <p className="detail-price">${product.price}</p>

                    <button className="product-btn" onClick={() => addToBasket(product)}>
                        <FaShoppingCart />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
