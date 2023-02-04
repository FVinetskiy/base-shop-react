// import arrProduct from './assets/store.json';
// rafc
// IMR
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Card from './components/Card/Card';
import FilterHead from './components/FilterHead/FilterHead';
import Basket from './components/Basket/Basket';
import FullProduct from './components/FullProduct/FullProduct';

function App() {
  return (
    <div className="app">
      <header>
          <FilterHead />
          <Card />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Card" element={<Basket />} />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>
    </div>
  );
}

export default App;
