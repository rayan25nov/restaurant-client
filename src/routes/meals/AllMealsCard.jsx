import React from "react";
import Styles from "./AllMealsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AllMealsCard = (props) => {
  return (
    <div className={Styles.card}>
      <figure>
        <img src={props.img} alt="Cuisine" />
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
