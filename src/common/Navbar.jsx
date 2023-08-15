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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbar_brand}>
        <FontAwesomeIcon icon={faUtensils} className={Styles.navbar_icon} />
        <span className={Styles.navbar_text}>Delight Dine</span>
      </div>

      <div
        className={`${Styles.navbar_links} ${menuOpen ? `${Styles.open}` : ""}`}
      >
        <a href="#" className={Styles.navbar_link}>
          Products
        </a>
        <a href="#" className={Styles.navbar_link}>
          Orders
        </a>
        <a href="#" className={Styles.navbar_link}>
          About
        </a>
        <button className={Styles.navbar_button}>Special Offer</button>
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
          <span className={Styles.navbar_text}>5</span>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={Styles.navbar_icon}
          />
          <span className={Styles.navbar_text}>2</span>
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