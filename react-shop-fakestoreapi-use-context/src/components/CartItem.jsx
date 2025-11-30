import { useContext } from "react";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

export default function CartItem({ item }) {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    return (
        <div className="CartItem">
            <img src={item.image} alt={item.description} />

            <div className="content">
                <div className="name">
                    <h3>{item.title}</h3>
                    <IoMdClose onClick={() => removeFromCart(item.id)} />
                </div>

                <div className="details">
                    <div className="amount">
                        <IoMdRemove onClick={() => decreaseAmount(item.id)} />
                        {item.amount}
                        <IoMdAdd onClick={() => increaseAmount(item.id)} />
                    </div>

                    <div className="price">
                        <p>Price: ${item.price}</p>
                        <p>Total: ${(item.price * item.amount).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}