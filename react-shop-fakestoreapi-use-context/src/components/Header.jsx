import { useContext } from "react"
import { SidebarContext } from "../contexts/SidebarContext"
import { PiShoppingBagBold, PiShoppingCartSimpleBold } from "react-icons/pi";
import { CartContext } from "../contexts/CartContext";

export default function Header() {
  const { handleClose } = useContext(SidebarContext);
  const { amount } = useContext(CartContext);

  return (
    <header>
      <a href="#" className="logo">
        <PiShoppingBagBold />
        Online shop
      </a>

      <div className="shopping-cart" onClick={handleClose}>
        <PiShoppingCartSimpleBold />
        <p>{amount}</p>
      </div>
    </header>
  )
}
