import React, { useState } from "react";
import allItems from "./Meals";
import { useParams } from "react-router-dom";
import Styles from "./AllMeals.module.css";
import AllMealsCard from "./AllMealsCard";

const AllMeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { category } = useParams();

  const filteredItems = category
    ? allItems[category].filter((item) =>
        item.caption.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : Object.keys(allItems).flatMap((categoryName) =>
        allItems[categoryName].filter((item) =>
          item.caption.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className={Styles.container}>
      <div className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a meal..."
          className={Styles.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={Styles.searchButton}
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>
      <div className={Styles.cardContainer}>
        {category && (
          <h2 className={Styles.categoryTitle}>{category.toUpperCase()}</h2>
        )}
        {filteredItems.map((menuItem, index) => (
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
};

export default AllMeals;
