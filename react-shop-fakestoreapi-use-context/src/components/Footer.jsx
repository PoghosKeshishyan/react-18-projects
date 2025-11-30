import { Link } from 'react-router-dom';
import { PiShoppingBagBold } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="logo">
        <PiShoppingBagBold />
        Online shop
      </a>

      <p className="credit">
        Copyright © 2024, E-Commerce. Created by Poghos Keshishyan. | All rights reserved.
      </p>

      <div className="social-links">
        <Link to='#'> <FaFacebook /> </Link>
        <Link to='#'> <FaInstagram /> </Link>
        <Link to='#'> <FaTwitter /> </Link>
        <Link to='#'> <FaYoutube /> </Link>
      </div>
    </footer>
  )
}
