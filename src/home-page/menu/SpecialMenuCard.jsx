import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Styles from "./SpecialMenuCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

const SpecialMenuCard = (props) => {
  function handlenotification() {
    toast.success("Food item added to your cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
  return (
    <div className={Styles.card} onClick={handlenotification}>
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
      <h3 className={Styles.price}>{props.price}</h3>
      <div className={Styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        <p>{props.rating}</p>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
