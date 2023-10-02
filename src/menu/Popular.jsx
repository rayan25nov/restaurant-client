import React from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
import Styles from "./Popular.module.css";
import mainDish from "../assets/images/main_dish.png";
import breakFast from "../assets/images/breakfast.png";
import dessert from "../assets/images/dessert_caption.png";
import browseAll from "../assets/images/browse_all.png";

const Popular = () => {
  return (
    <div className={Styles.Popular}>
      <h2>CUSTOMER FAVORITES</h2>
      <h1>Popular Categories</h1>
      <div className={Styles.card_container}>
        <Link to="/allmeals/mainDish" className={Styles.link}>
          <PopularCard img={mainDish} name="Main Dish" number="86" alt="dish" />
        </Link>
        <Link to="/allmeals/breakFast" className={Styles.link}>
          <PopularCard
            img={breakFast}
            name="Breakfast"
            number="12"
            alt="dish"
          />
        </Link>
        <Link to="/allmeals/desserts" className={Styles.link}>
          <PopularCard img={dessert} name="Dessert" number="48" alt="dish" />
        </Link>
        <Link to="/allmeals" className={Styles.link}>
          <PopularCard
            img={browseAll}
            name="Browse All"
            number="255"
            alt="dish"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Popular;
