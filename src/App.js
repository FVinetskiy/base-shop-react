// import arrProduct from './assets/store.json';
// rafc
// IMR

import './App.sass';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/home';
import NotFound from './pages/NotFound';
import Card from './components/Card/Card';
import FilterHead from './components/FilterHead/FilterHead';
import Basket from './components/Basket/Basket';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="app">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <header>
          <FilterHead />
          <Card />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Card" element={<Basket />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
