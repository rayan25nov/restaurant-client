import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className={Styles.card}>
      <a href="#">
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
      </a>
    </div>
  );
};

export default Card;
