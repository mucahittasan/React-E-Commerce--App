import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Header from "../components/Header";
import DataContext from "../context/DataContext";

const ItemDetail = () => {
  const { item_id } = useParams();

  const { items, basket, addItem, removeItem } = useContext(DataContext);

  const filteredData = items.filter((item) => item.id === Number(item_id));

  return (
    <div>
      <Header />
      <div className="back">
        <Link to="/">
          {" "}
          <BsFillArrowLeftCircleFill className="back-icon" />{" "}
        </Link>
      </div>
      {filteredData.map((item, index) => {
        const filterButton = basket.find((data) => data.id === item.id);
        return (
          <div className="card__detail" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card__detail-description">
              <h1>{item.title}</h1>
              <h3>{item.price}TL</h3>
              <p>{item.description}</p>
              {filterButton ? (
                <button
                  onClick={() => removeItem(item)}
                  className="detail-btn btn-dark"
                >
                  Sepeten Cikar
                </button>
              ) : (
                <button
                  onClick={() => addItem(item)}
                  className="detail-btn btn-primary"
                >
                  Sepete Ekle
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
