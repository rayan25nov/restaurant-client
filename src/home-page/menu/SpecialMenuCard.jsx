import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Styles from "./SpecialMenuCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import menuItems from "./SpecialMenuItems.js";

const SpecialMenuCard = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (itemId) => {
    console.log(itemId);
    const newItem = menuItems.find((item) => item.id === itemId);
    console.log(newItem);
    const isDuplicate = cart.some((item) => item.id === itemId);
    if (isDuplicate) {
      toast.success("This item is already in your cart.", {
        position: "bottom-center",
        autoClose: 1000,
      });
      return;
    } else {
      dispatch(addItem(newItem));
      toast.success("Food item added to your cart!", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className={Styles.card} onClick={() => handleAddToCart(props.id)}>
      <div className={Styles.availContatent}>
        <div className={Styles.availItems}>
          <p>Available</p>
        </div>
      </div>
      <figure>
        <img src={props.img} alt="Cuisine" />
        <figcaption>{props.caption}</figcaption>
      </figure>
      <p className={Styles.description}>{props.description}</p>
      <h3 className={Styles.price}>₹{props.price}</h3>
      <div className={Styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        <p>{props.rating}</p>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
