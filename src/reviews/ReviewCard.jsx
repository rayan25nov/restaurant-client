import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Styles from "./ReviewCard.module.css";

const ReviewCard = (props) => {
  return (
    <div className={Styles.review_card}>
      <img src={props.image} alt="Customer Profile" />
      <div className={Styles.review_content}>
        <div className={Styles.icons}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p>{props.review}</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
