// Modules
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Images
import basketLogo from "../images/basket.png";
// Components
import DataContext from "../context/DataContext";

const Header = () => {
  const { basket, items, addItem, removeItem } = useContext(DataContext);

  const [search, setSearch] = useState("");

  const filteredSearch = items.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  console.log(filteredSearch);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <h1 className="logo">
            Steal <span> im </span>
          </h1>
        </Link>

        <div className="basket">
          <Link to="/basket">
            <img src={basketLogo} alt="" />
            {basket.length > 0 ? <span> {basket.length} </span> : null}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
