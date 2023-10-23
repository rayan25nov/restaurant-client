import React from "react";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className={Styles.cartContainer}>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={Styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={Styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div className={Styles.cartTotal}>
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
