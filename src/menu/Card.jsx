import React from "react";
import Styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={Styles.card}>
      <a href="#">
        <figure>
          <img src={props.img} alt="Cuisine" />
          <figcaption>{props.caption}</figcaption>
        </figure>
        <p className={Styles.description}>{props.description}</p>
      </a>
    </div>
  );
};

export default Card;
