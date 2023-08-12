import React from "react";
import ReviewCard from "./ReviewCard";
import Profile1 from "../assets/images/profile_1.jpg";
import Profile2 from "../assets/images/profile_2.jpg";

const Review = () => {
  return (
    <div>
      <h1>Our Delight Dine Restaurant Happy Customers</h1>
      <p>
        Your feedback is invaluable to us! Share your dining experience at
        SavoryEats and help us continue to create exceptional moments for you
        and all our cherished customers.
      </p>
      <ReviewCard
        image={Profile1}
        review={
          "SavoryEats has transformed the way I manage my restaurant. Its user-friendly interface and comprehensive features have made handling reservations, orders, and customer interactions a breeze."
        }
        name={"Emily Johnson"}
      />
      <ReviewCard
        image={Profile2}
        review={
          "Thanks to SavoryEats, our restaurant's efficiency and customer satisfaction have soared. It's a game-changer for any dining establishment looking to enhance its operations and deliver a remarkable dining experience."
        }
        name={"Michael Davis"}
      />
    </div>
  );
};

export default Review;
