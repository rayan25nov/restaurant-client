import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div>
      <div>
        <h1>All Delicious Cuisines</h1>
        <p>Pizza, Salad, Burger, Pasta, Sandwiches, Desserts, and more</p>
        <button>Find out more</button>
      </div>
      <div>
        <img
          src="../../src/assets/images/pasta.jpg"
          alt="Pasta on a plate"
          height={"200px"}
        />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
    </div>
  );
};

export default Home;
