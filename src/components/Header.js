// Modules
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Images
import basketLogo from "../images/basket.png";
// Components
import DataContext from '../context/DataContext'


const Header = () => {

  const { basket } = useContext(DataContext);

  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">
          Steal<span>im</span>
        </h1>
      </Link>

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
