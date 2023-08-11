import React from "react";
import Styles from "./About.module.css";
import Salad from "../assets/images/Salad.jpg";

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <img src={Salad} alt="Salad" />
      </div>
      <div className={Styles.main}>
        <h3>Welcome to our SavoryEats Restaurants</h3>
        <p>
          food, substance consisting essentially of protein, carbohydrate, fat,
          and other nutrients used in the body of an organism to sustain growth
          and vital processes and to furnish energy. The absorption and
          utilization of food by the body is fundamental to nutrition and is
          facilitated by digestion
        </p>
        <button>Find More About Us</button>
      </div>
    </div>
  );
};

export default About;
