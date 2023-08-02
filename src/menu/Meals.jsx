import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import kadhaiPaneer from "../assets/images/kadhai_paneer.jpg";
import pizza from "../assets/images/pizza.jpg";
import chickenTikka from "../assets/images/chicken_tikka.jpg";
import biryani from "../assets/images/biryani.jpg";
import Styles from "./Meals.module.css";

const Meals = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <h2>Our Delicious and Special Meal</h2>
      </div>
      <div className={Styles.main}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          size="2x"
          color="black"
          className={Styles.icon}
        />
        <div className={Styles.card_container}>
          <Card
            img={kadhaiPaneer}
            caption="Kadhai Paneer - A Flavorful Delight!"
            description="A delectable Indian vegetarian dish featuring succulent paneer (cottage cheese) cooked with aromatic spices in a traditional 'kadhai' (wok), offering a burst of flavors."
          />
          <Card
            img={pizza}
            caption="Pizza - A Perfect Fusion of Flavors and Happiness!"
            description="Chicken Tikka is a popular Indian appetizer made by marinating succulent pieces of chicken in a tantalizing blend of aromatic spices and yogurt, followed by grilling to perfection."
          />
          <Card
            img={chickenTikka}
            caption="Chicken Tikka - A Spicy Grilled Delight!"
            description=" A beloved classic, a delectable combination of freshly baked dough topped with savory tomato sauce, melted cheese, and a variety of mouthwatering toppings."
          />
          <Card
            img={biryani}
            caption="Biryani - A Flavorful Rice Delicacy!"
            description="Biryani is a fragrant and flavorful rice dish made by layering basmati rice with succulent meat, aromatic spices, and caramelized onions, creating a harmonious blend of tastes and textures."
          />
        </div>
        <FontAwesomeIcon
          icon={faAnglesRight}
          size="2x"
          color="black"
          className={Styles.icon}
        />
      </div>
    </div>
  );
};

export default Meals;
