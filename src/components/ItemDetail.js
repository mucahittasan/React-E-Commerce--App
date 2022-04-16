import { useParams } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ItemDetail = () => {
  const { item_id } = useParams();

  const { items } = useContext(DataContext);

  const filteredData = items.filter((item) => item.id === Number(item_id));
  console.log(filteredData);

  return (
    <div>
      <Header />
      {filteredData.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
          <h3>{item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
