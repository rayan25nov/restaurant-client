import { React, useState } from "react";
import Card from "./Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import menuItems from "./MenuItems.js";
import Styles from "./Meals.module.css";

const Meals = () => {
  const itemsPerPage = 4; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = menuItems.slice(startIndex, endIndex);

  return (
    <div className={Styles.container} id="meals-component">
      <div className={Styles.heading}>
        <h2>Our Delicious and Special Meals</h2>
      </div>
      <div className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a meal..."
          className={Styles.search}
        />
        <button className={Styles.searchButton}>Search</button>
      </div>
      <div className={Styles.main}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          size="2x"
          color="black"
          className={`${Styles.icon} ${Styles.leftIcon}`}
          onClick={handlePrev}
        />
        <div className={Styles.card_container}>
          {visibleItems.map((menuItem, index) => (
            <div key={index} className={`${Styles.card} ${Styles.activeCard}`}>
              <Card
                img={menuItem.img}
                caption={menuItem.caption}
                description={menuItem.description}
              />
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faAnglesRight}
          size="2x"
          color="black"
          className={`${Styles.icon} ${Styles.rightIcon}`}
          onClick={handleNext}
        />
      </div>
      <div className={Styles.btn}>
        <button onClick={handlePrev}>Previous Items</button>
        <button onClick={handleNext}>Load More</button>
      </div>
    </div>
  );
};

export default Meals;
