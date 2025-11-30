import { FaShoppingCart } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function ProductItem({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="ProductItem">
      <img src={item.image} alt={item.description} />
      <h2>{item.title.slice(0, 15)}...</h2>
      <p>{item.description.slice(0, 67)}...</p>
      <p>${item.price}</p>

      <button onClick={() => addToCart(item, item.id)}>
        <FaShoppingCart />
        Add to cart
      </button>

      <Link to={`/product/${item.id}`}>
        <BsFillEyeFill />
      </Link>
    </div>
  )
}
