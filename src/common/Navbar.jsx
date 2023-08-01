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

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faUtensils,
//   faShoppingCart,
//   faPhone,
//   faClipboardList,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css"; // Import your custom CSS file for styling

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className={`navbar`}>
//       <div className="navbar-brand">
//         <FontAwesomeIcon icon={faUtensils} className="navbar-icon" />
//         <span className="navbar-text">Delight Dine</span>
//       </div>

//       <div className={`navbar-links`}>
//         <a href="#" className="navbar-link">
//           Products
//         </a>
//         <a href="#" className="navbar-link">
//           Orders
//         </a>
//         <a href="#" className="navbar-link">
//           About
//         </a>
//         <button className="navbar-button">Special Offer</button>
//         <div className="navbar-phone">
//           <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
//           <span className="navbar-text">8507545405</span>
//         </div>
//       </div>

//       <div className={`navbar-info`}>
//         <div className="navbar-orders">
//           <FontAwesomeIcon icon={faClipboardList} className="navbar-icon" />
//           <span className="navbar-text">5</span>
//           <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
//           <span className="navbar-text">2</span>
//         </div>
//       </div>

//       <div className={`small-screen ${menuOpen ? "open" : ""}`}>
//         <div className="navbar-links">
//           <a href="#" className="navbar-link">
//             Products
//           </a>
//           <a href="#" className="navbar-link">
//             Orders
//           </a>
//           <a href="#" className="navbar-link">
//             About
//           </a>
//           <button className="navbar-button">Special Offer</button>
//         </div>
//       </div>
//       <div className="navbar-toggle" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} className="navbar-icon" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faUtensils,
//   faShoppingCart,
//   faPhone,
//   faClipboardList,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css"; // Import your custom CSS file for styling

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(true);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className={`navbar`}>
//       <div className="navbar-brand">
//         <FontAwesomeIcon icon={faUtensils} className="navbar-icon" />
//         <span className="navbar-text">Delight Dine</span>
//       </div>

//       <div className={`navbar-links ${showMenu ? "show-menu" : ""}`}>
//         <a href="#" className="navbar-link">
//           Products
//         </a>
//         <a href="#" className="navbar-link">
//           Orders
//         </a>
//         <a href="#" className="navbar-link">
//           About
//         </a>
//         <button className="navbar-button">Special Offer</button>
//       </div>

//       <div className="navbar-info">
//         <div className={`navbar-phone ${showMenu ? "show-menu" : ""}`}>
//           <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
//           <span className="navbar-text">8507545405</span>
//         </div>
//         <div className="navbar-orders">
//           <FontAwesomeIcon icon={faClipboardList} className="navbar-icon" />
//           <span className="navbar-text">5</span>
//           <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
//           <span className="navbar-text">2</span>
//         </div>
//       </div>

//       <div className="navbar-toggle" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} className="navbar-icon" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUtensils,
//   faShoppingCart,
//   faPhone,
//   faClipboardList,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css"; // Import your custom CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <FontAwesomeIcon icon={faUtensils} className="navbar-icon" />
//         <span className="navbar-text">Delight Dine</span>
//       </div>

//       <div className="navbar-links">
//         <a href="#" className="navbar-link">
//           Products
//         </a>
//         <a href="#" className="navbar-link">
//           Orders
//         </a>
//         <a href="#" className="navbar-link">
//           About
//         </a>
//         <button className="navbar-button">Special Offer</button>
//       </div>

//       <div className="navbar-info">
//         <div className="navbar-phone">
//           <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
//           <span className="navbar-text">8507545405</span>
//         </div>
//         <div className="navbar-orders">
//           <FontAwesomeIcon icon={faClipboardList} className="navbar-icon" />
//           <span className="navbar-text">5</span>
//           <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
//           <span className="navbar-text">2</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
