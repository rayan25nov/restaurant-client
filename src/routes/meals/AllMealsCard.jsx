import React from "react";
import Styles from "./AllMealsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { AdvancedImage } from "@cloudinary/react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { addItem } from "../../redux/slices/cartSlice";
import allItems from "./Meals-v2";

const AllMealsCard = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (itemId) => {
    console.log(itemId);
    let newItem;
    for (const category in allItems) {
      if (allItems.hasOwnProperty(category)) {
        // Use the find method to search for an item with a specific ID within the category
        newItem = allItems[category].find((item) => item.id === itemId);
        if (newItem) {
          break; // If you only want to find it once, you can exit the loop
        }
      }
    }
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
      <div className={Styles.availContent}>
        <div className={Styles.availItems}>
          <p>Available</p>
        </div>
      </div>
      <figure>
        {/* <AdvancedImage
          cldImg={props.img}
          alt="Cuisine"
          className={Styles.cardImg}
        /> */}
        <img src={props.img} alt="Cuisine" className={Styles.cardImg} />
        <figcaption>{props.caption}</figcaption>
      </figure>
      <p className={Styles.description}>{props.description}</p>
      <div className={Styles.divider}>
        <h3 className={Styles.price}>₹{props.price}</h3>
        <div className={Styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <p>{props.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default AllMealsCard;
