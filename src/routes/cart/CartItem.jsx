import React from "react";
import Styles from "./CartItem.module.css";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={Styles.cartItem}>
      <div className={Styles.itemInfo}>
        <img src={item.img} alt={item.caption} />
        <h4>{item.caption}</h4>
        <p>Price: ₹{item.newPrice ? item.newPrice : item.price}</p>
        <div className={Styles.quantityControl}>
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: -1 }))
            } // Decrease quantity
            className={Styles.quantityControlButton}
          >
            -
          </button>
          <span>{item.quantity}</span> {/* Display the item's quantity */}
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: 1 }))
            } // Increase quantity
            className={Styles.quantityControlButton}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeItem(item.id))}
        className={Styles.removeItem}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
