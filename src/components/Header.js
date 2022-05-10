// Modules
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Images
import basketLogo from "../images/basket.png";
// Components
import DataContext from "../context/DataContext";

const Header = () => {
  const { basket, items } = useContext(DataContext);

  const [search, setSearch] = useState('');

  const filteredSearch = items.filter(item => item.title.toLowerCase().includes(search));

  console.log(filteredSearch)

  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">
          Steal<span>im</span>
        </h1>
      </Link>

      <div className="header-search">
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Search.." />

        {search &&
          <div className="header-search__boxes">
            {filteredSearch && filteredSearch.map((item, index) => (
              <div key={index} className="box">
                <div className="item-image">
                  <img src={item.image} alt="Macbook" />
                </div>
                <div className="item-info">
                  <div className="title">{item.title}</div>
                  <div className="price">{item.price}</div>
                </div>
                <div className="item-buttons">
                  <button className="btn-primary">Detail</button>
                  <button className="btn-primary">Add Basket</button>
                </div>
              </div>
            ))}
          </div>
        }


      </div>

      <div className="basket">
        <Link to="/basket">
          <img src={basketLogo} alt="" />
          {basket.length > 0 ? <span>{basket.length}</span> : null}
        </Link>
      </div>
    </header>
  );
};

export default Header;
