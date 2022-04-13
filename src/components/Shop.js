import React, { useContext, useState } from "react";
import ShopItem from "./ShopItem";
import DataContext from "../context/DataContext";

const Shop = () => {
  const { categories, filterItems, items } = useContext(DataContext);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="shop">
      <div className={isActive ? "shop__header active" : "shop__header"}>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <button onClick={() => filterItems(category)}>
                  {category.toLocaleUpperCase()}
                </button>
              </li>
            );
          })}
        </ul>
        <div onClick={() => handleClick()} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="shop__content">
        <div className="shop-cards">
          {items.map((item, index) => (
            <div key={index}>
              <ShopItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
