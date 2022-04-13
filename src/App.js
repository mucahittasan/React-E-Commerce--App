// Modules
import { Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Basket from './components/Basket'


function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>

    </div>
  );
}

export default App;