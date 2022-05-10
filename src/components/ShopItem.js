import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const ShopItem = ({ item }) => {
  const { addItem, removeItem, basket } = useContext(DataContext);

  const filterButton = basket.find((data) => data.id === item.id);

  return (
    <div className="shop-card">
      <div className="card-image">
        <Link to={`/item/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="card-name">{item.title}</div>
      <div className="card-price">{item.price}TL</div>

      {filterButton ? (
        <button onClick={() => removeItem(item)} className="btn btn-dark">
          Sepeten Cikar
        </button>
      ) : (
        <button onClick={() => addItem(item)} className="btn btn-primary">
          Sepete Ekle
        </button>
      )}
    </div>
  );
};

export default ShopItem;
