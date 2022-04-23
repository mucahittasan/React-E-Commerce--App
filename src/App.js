// Modules
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import ItemDetail from "./pages/ItemDetail";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/item/:item_id" element={<ItemDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
