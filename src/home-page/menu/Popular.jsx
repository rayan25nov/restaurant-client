import React from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
import Styles from "./Popular.module.css";
import mainDish from "../../assets/images/main_dish.png";
import breakFast from "../../assets/images/breakfast.png";
import dessert from "../../assets/images/dessert_caption.png";
import browseAll from "../../assets/images/browse_all.png";
import allItems from "../../routes/meals/Meals-v2";

const Popular = () => {
  const numberOfMainDish = allItems.mainDish.length;
  const numberOfBreakFast = allItems.breakFast.length;
  const numberOfDessert = allItems.desserts.length;
  const numberOfBrowseAll =
    numberOfMainDish + numberOfBreakFast + numberOfDessert;
  return (
    <div className={Styles.Popular}>
      <h2>CUSTOMER FAVORITES</h2>
      <h1>Popular Categories</h1>
      <div className={Styles.card_container}>
        <Link to="/allmeals/mainDish" className={Styles.link}>
          <PopularCard
            img={mainDish}
            name="Main Dish"
            number={numberOfMainDish}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals/breakFast" className={Styles.link}>
          <PopularCard
            img={breakFast}
            name="Breakfast"
            number={numberOfBreakFast}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals/desserts" className={Styles.link}>
          <PopularCard
            img={dessert}
            name="Dessert"
            number={numberOfDessert}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals" className={Styles.link}>
          <PopularCard
            img={browseAll}
            name="Browse All"
            number={numberOfBrowseAll}
            alt="dish"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Popular;
