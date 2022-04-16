import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from 'react-router-dom';

const ShopItem = ({ item }) => {
  const { setBasket, basket } = useContext(DataContext);

  const basketItem = (data) => {
    setBasket([...basket, { ...data }]);
  };

  const filterButton = basket.find(data => data.id === item.id);

  const removeItem = (item) => {
    setBasket(basket.filter(data => data.id !== item.id));
  }

  return (
    <div className="shop-card">
      <div className="card-image">
        <Link to={`/item/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="card-name">{item.title}</div>
      <div className="card-price">{item.price}TL</div>


      {filterButton ? <div onClick={() => removeItem(item)} className="btn btn-dark">
        Sepeten Cikar
      </div> : <div onClick={() => basketItem(item)} className="btn btn-primary">
        Sepete Ekle
      </div>}
    </div>
  );
};

export default ShopItem;
