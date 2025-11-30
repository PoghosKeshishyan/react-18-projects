import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProuductContext";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const product = products.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="ProductPage">
      <button className="goBackBtn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      {
        product && (
          <div className="product">
            <img src={product.image} alt={product.description} />

            <div className="content">
              <h2 className="title">{product.title}</h2>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>

              <button className="addToCart" onClick={() => addToCart(product, product.id)}>
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}
