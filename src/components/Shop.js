import React, { useContext, useState } from "react";
import ShopItem from "./ShopItem";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { categories, filterItems, items, addItem, removeItem, basket } =
    useContext(DataContext);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [search, setSearch] = useState("");

  const filteredSearch = items.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

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
        <div className="header-search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search.."
          />

          {search && (
            <div className="header-search__boxes">
              {filteredSearch &&
                filteredSearch.map((item, index) => {
                  const filterButton = basket.find(
                    (data) => data.id === item.id
                  );

                  return (
                    <div key={index} className="box">
                      <div className="item-image">
                        <img src={item.image} alt="Macbook" />
                      </div>
                      <div className="item-info">
                        <div className="title"> {item.title} </div>
                        <div className="price"> {item.price} </div>
                      </div>
                      <div className="item-buttons">
                        <Link to={`/item/${item.id}`}>
                          <button className="btn-primary"> Detail </button>
                        </Link>
                        {filterButton ? (
                          <button
                            onClick={() => removeItem(item)}
                            className="btn btn-dark"
                          >
                            Remove Basket
                          </button>
                        ) : (
                          <button
                            onClick={() => addItem(item)}
                            className="btn btn-primary"
                          >
                            Add Basket
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
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
