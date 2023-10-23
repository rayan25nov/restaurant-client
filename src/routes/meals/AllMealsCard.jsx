import React, { useState } from "react";
import Styles from "./AllMealsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AdvancedImage } from "@cloudinary/react";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

const AllMealsCard = (props) => {
  const [cartitems, setCartitems] = useState([]);

  const handlenotification = (item) => {
    setCartitems([...cartitems, item]);
    toast.success("Food item added to your cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  };
  return (
    <div
      className={Styles.card}
      onClick={() => handlenotification({ id: props.id })}
    >
      <div className={Styles.availContatent}>
        <div className={Styles.availItems}>
          <p>Available</p>
        </div>
      </div>
      <figure>
        <AdvancedImage cldImg={props.img} alt="Cuisine" />
        {/* <img src={props.img} alt="Cuisine" /> */}
        <figcaption>{props.caption}</figcaption>
      </figure>
      <p className={Styles.description}>{props.description}</p>
      <div className={Styles.divider}>
        <h3 className={Styles.price}>{props.price}</h3>
        <div className={Styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <p>{props.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default AllMealsCard;
