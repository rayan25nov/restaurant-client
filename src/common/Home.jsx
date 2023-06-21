import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>All Delicious Cuisines</h1>
        <p>
          Pizza, Salad, Burger, Pasta, Sandwiches, Desserts, Roti Sabzi, Drinks
          and more
        </p>
        <button>Find out more</button>
      </div>
      <div className="image-section">
        <img src="../../src/assets/images/pasta.jpg" alt="Pasta on a plate" />
        <div className="social-icons">
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
