import React from "react";
import Styles from "./Cart.module.css";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className={Styles.cartItem}>
      <div className={Styles.itemInfo}>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <div className={Styles.quantityControl}>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
      </div>
      <button onClick={() => removeItem(item.id)} className={Styles.removeItem}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
