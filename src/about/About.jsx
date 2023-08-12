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
          Welcome to SavoryEats, where innovation meets culinary excellence.
          With a passion for hospitality and a commitment to seamless dining
          experiences, we've crafted a digital platform that empowers both
          diners and restaurateurs. Our system seamlessly orchestrates
          reservations, streamlines orders, and enhances communication between
          patrons and kitchen, all while celebrating the artistry of gastronomy.
          Discover a new era of dining where technology and taste converge
          harmoniously, promising an unforgettable journey through flavors,
          convenience, and the joy of shared moments.
        </p>
        <button>Find More About Us</button>
      </div>
    </div>
  );
};

export default About;
