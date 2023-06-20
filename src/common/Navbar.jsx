import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faShoppingCart,
  faPhone,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import your custom CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FontAwesomeIcon icon={faUtensils} className="navbar-icon" />
        <span className="navbar-text">Delight Dine</span>
      </div>

      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Products
        </a>
        <a href="#" className="navbar-link">
          Orders
        </a>
        <a href="#" className="navbar-link">
          About
        </a>
        <button className="navbar-button">Special Offer</button>
      </div>

      <div className="navbar-info">
        <div className="navbar-phone">
          <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
          <span className="navbar-text">8507545405</span>
        </div>
        <div className="navbar-orders">
          <FontAwesomeIcon icon={faClipboardList} className="navbar-icon" />
          <span className="navbar-text">5</span>
          <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
          <span className="navbar-text">2</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
