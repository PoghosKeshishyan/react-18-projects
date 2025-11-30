import { NavLink, Link } from "react-router-dom";
import { PiShoppingBagBold } from "react-icons/pi";

export function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <PiShoppingBagBold />
                Online Shop
            </Link>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
}