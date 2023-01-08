import './App.sass';
import Card from './components/Card';
import FilterHead from './components/FilterHead';
import MainFiltred from './components/MainFiltred';
import Paginations from './components/Paginations';
import Products from './components/Products';
// import arrProduct from './assets/store.json';

import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [isloading, setIsloading] = React.useState(true);
  console.log(isloading, '1');
  React.useEffect(() => {
    fetch('https://63ba79d34482143a3f28546c.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsloading(false);
      });
  }, []);

  return (
    <div className="app">
      <header>
        <div>shop</div>
        <FilterHead />
        <Card />
      </header>
      <MainFiltred />
      <Products isloading={isloading} arrProduct={items} />
      <Paginations />
    </div>
  );
}

export default App;
