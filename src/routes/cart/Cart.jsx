import React from "react";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className={Styles.cartContainer}>
        <h2>Your Cart is Empty</h2>
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
    <div className={Styles.container}>
      <h2 className={Styles.heading}>Your Cart</h2>
      <div className={Styles.cartContainer}>
        <div className={Styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className={Styles.cartTotal}>
          <p>Bill Details</p>
          <hr />
          <p>Subtotal: ₹{calculateTotal()}</p>
          <p>GST and Restaurant Charges: ₹{calculateTotal() * 0.05}</p>
          <p>Total: ₹{calculateTotal() + calculateTotal() * 0.05}</p>
          <button>Proceed to Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
