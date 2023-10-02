import React from "react";
import allItems from "./Meals";

const AllMeals = () => {
  return (
    <div>
      {allItems.map((menuItem, index) => (
        <div key={index} className={`${Styles.card} ${Styles.activeCard}`}>
          <Card
            img={menuItem.img}
            caption={menuItem.caption}
            description={menuItem.description}
            price={menuItem.price}
            rating={menuItem.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default AllMeals;
