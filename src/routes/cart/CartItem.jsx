import React from "react";
import Styles from "./CartItem.module.css";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className={Styles.cartItem}>
      <div className={Styles.itemInfo}>
        <img src={item.img} alt={item.caption} />
        <h4>{item.caption}</h4>
        <p>Price: {item.price}</p>
        <div className={Styles.quantityControl}>
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className={Styles.quantityControlButton}
          >
            -
          </button>
          <span>{/* {item.quantity} */}1</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className={Styles.quantityControlButton}
          >
            +
          </button>
        </div>
      </div>
      <button onClick={() => removeItem(item.id)} className={Styles.removeItem}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
