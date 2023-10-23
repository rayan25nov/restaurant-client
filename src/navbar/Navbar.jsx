import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUtensils,
  faShoppingCart,
  faPhone,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Navbar.module.css"; // Import your custom CSS file for styling
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={Styles.navbar}>
      <Link to="/" className={Styles.navbar_link}>
        <div className={Styles.navbar_brand}>
          <FontAwesomeIcon icon={faUtensils} className={Styles.navbar_icon} />
          <span className={Styles.navbar_text}>Delight Dine</span>
        </div>
      </Link>

      <div
        className={`${Styles.navbar_links} ${menuOpen ? `${Styles.open}` : ""}`}
      >
        <Link to="/" className={Styles.navbar_link}>
          Home
        </Link>
        <Link to="allmeals" className={Styles.navbar_link}>
          Products
        </Link>
        <Link to="orders" className={Styles.navbar_link}>
          Orders
        </Link>
        <Link to="/offers">
          <button className={Styles.navbar_button}>Special Offer</button>
        </Link>
        <div className={Styles.navbar_phone}>
          <FontAwesomeIcon icon={faPhone} className={Styles.navbar_icon} />
          <span className={Styles.navbar_text}>8507545405</span>
        </div>
      </div>

      <div className={Styles.navbar_info}>
        <div className={Styles.navbar_orders}>
          <FontAwesomeIcon
            icon={faClipboardList}
            className={Styles.navbar_icon}
          />
          <span className={Styles.navbar_text}>0</span>
          <Link to="cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={Styles.navbar_icon}
            />
          </Link>
          <span className={Styles.navbar_text}>0</span>
        </div>
      </div>
      <div className={Styles.navbar_toggle} onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className={Styles.navbar_icon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
