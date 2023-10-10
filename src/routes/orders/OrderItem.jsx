// OrderItem.js
import React from "react";
import Styles from "./OrderItem.module.css"; // Modular CSS

const OrderItem = ({ order, removeOrder }) => {
  return (
    <div className={Styles.orderItem}>
      <h2>{order.customerName}</h2>
      <p>Items: {order.items.join(", ")}</p>
      <p>Total: ${order.total}</p>
      <button onClick={() => removeOrder(order.id)}>Remove</button>
    </div>
  );
};

export default OrderItem;
