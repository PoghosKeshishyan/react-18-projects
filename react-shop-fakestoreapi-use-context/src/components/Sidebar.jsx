import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";

export default function Sidebar() {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, amount, total, clearCart } = useContext(CartContext);

    return (
        <div className={`Sidebar ${isOpen ? 'isOpen' : 'closed'}`}>
            <div className="heading">
                <h2 className="title">Shopping Bag ({amount})</h2>
                <IoMdArrowForward onClick={handleClose} />
            </div>

            <div className="cart-container">
                {
                    cart.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>

            {
                !!cart.length && (
                    <div className="total">
                        <p>Total: ${(total).toFixed(2)}</p>
                        <FiTrash2 onClick={clearCart} />
                    </div>
                )
            }
        </div>
    )
}
