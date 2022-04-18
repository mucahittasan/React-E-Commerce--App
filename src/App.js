// Modules
import { Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Basket from './components/Basket';
import ItemDetail from './components/ItemDetail';
import Error404 from './components/Error404';


const App = () => {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/item/:item_id' element={<ItemDetail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App;