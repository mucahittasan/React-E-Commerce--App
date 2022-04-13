// Modules
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// Components
import DataContext from "../context/DataContext";
import Alert from './Alert'
// Image
import basketLogo from "../images/basket.png";


const Basket = () => {

  const { basket, setBasket } = useContext(DataContext);
  const totalItems = basket.length > 0 ? basket.reduce((total, item) => total = total + (item.price * item.count), 0) : basket
  const [success, setSuccess] = useState(false);

  const increaseButton = (data) => {

    const newBasket = basket.find(item => item.id === data.id);
    if (newBasket) {
      setBasket(basket.map(item => item.id === data.id ? { ...item, count: ++item.count } : item))
    } else {
      return;
    }
  }

  const removeItem = (item) => {
    setBasket(basket.filter(data => data.id !== item.id))
  }

  const decraseButton = (data) => {
    setBasket(basket.map(item => item.id === data.id ? { ...item, count: item.count > 1 ? --item.count : 1 } : item))
  }

  const successButton = () => {

    setSuccess(!success)

    setBasket([]);
  }


  return (
    <div>
      <header className="header">
        <Link to="/">
          <h1 className="logo">
            Steal<span>im</span>
          </h1>
        </Link>

        <div className="basket">
          <Link to="/basket">
            <img src={basketLogo} alt="" />
          </Link>
        </div>
      </header>

      <div className="back">
        <div className="back">
          <Link to="/">
            {" "}
            <BsFillArrowLeftCircleFill className="back-icon" />{" "}
          </Link>
        </div>
      </div>
      {basket.length <= 0 || success ? <Alert /> :

        <div className="basket-container">
          <div className="basket-content">
            {basket.map((item, index) => {

              return (
                <div key={index} className="basket-card">
                  <div className="basket-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="basket__description">
                    <div className="basket__description-content">
                      <div className="basket-title">
                        Isim: <span>{item.title}</span>
                      </div>
                      <div className="basket-price">
                        Fiyat: <span>{item.price}TL</span>
                      </div>
                      <div className="basket-price">
                        Toplam: <span>x{item.count} Adet</span>
                      </div>
                    </div>
                    <div className="basket-button">
                      <button onClick={() => decraseButton(item)}>-</button>
                      <button onClick={() => removeItem(item)}>Sepetten Cikar</button>
                      <button onClick={() => increaseButton(item)}>+</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="basket__summary">
            <div className="basket__summary-content">
              <div className="total">
                Toplam: <span>{Number(totalItems)}TL</span>
              </div>
              <div className="cargo-total">
                Kargo Toplami: <span>14.99TL</span>
              </div>
              <div className="discount">
                100 Tl ve Uzeri Kargo <span>-14.99TL</span>
              </div>
            </div>
            <div className="total-price">
              Toplam : <span>{Number(totalItems)}TL</span>
            </div>
            <button onClick={() => successButton()} className="btn-primary">Sepeti Onayla</button>

          </div>
        </div>
      }

    </div>
  );
};

export default Basket;
