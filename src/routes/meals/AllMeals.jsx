import React from "react";
import allItems from "./Meals";
import { useNavigate, useParams } from "react-router-dom";
import Styles from "./AllMeals.module.css";
import AllMealsCard from "./AllMealsCard";

const AllMeals = () => {
  // Get the category parameter from the route
  const { category } = useParams();
  console.log(category);
  const navigate = useNavigate();

  // Check if the specified category exists in allItems
  if (category) {
    return (
      <div>
        <h2 className={Styles.categoryTitle}>{category.toUpperCase()}</h2>
        <div className={Styles.cardContainer}>
          {allItems[category].map((menuItem, index) => (
            <div key={index} className={Styles.activeCard}>
              <AllMealsCard
                img={menuItem.img}
                caption={menuItem.caption}
                description={menuItem.description}
                price={menuItem.price}
                rating={menuItem.rating}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // Handle the case when category doesn't exist
    return (
      <div>
        {Object.keys(allItems).map((category) => (
          <div key={category}>
            <h2 className={Styles.categoryTitle}>{category.toUpperCase()}</h2>
            <div className={Styles.cardContainer}>
              {allItems[category].map((menuItem, index) => (
                <div key={index} className={Styles.activeCard}>
                  <AllMealsCard
                    img={menuItem.img}
                    caption={menuItem.caption}
                    description={menuItem.description}
                    price={menuItem.price}
                    rating={menuItem.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default AllMeals;
