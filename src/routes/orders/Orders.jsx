// Orders.js
import React, { useState } from "react";
import OrderItem from "./OrderItem";
import Styles from "./Orders.module.css"; // Modular CSS

const Orders = () => {
  // Sample data for orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      items: ["Burger", "Fries", "Soda"],
      total: 20,
    },
    {
      id: 2,
      customerName: "Jane Smith",
      items: ["Pizza", "Salad", "Water"],
      total: 18,
    },
    // Add more orders as needed
  ]);

  // Function to remove an order
  const removeOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className={Styles.ordersContainer}>
      <h1>Orders</h1>
      <div className={Styles.orderList}>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} removeOrder={removeOrder} />
        ))}
      </div>
      <p>Total Orders: {orders.length}</p>
    </div>
  );
};

export default Orders;
