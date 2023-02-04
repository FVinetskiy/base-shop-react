import React from 'react';
import './emptyBasket.sass'
import svg from '../../assets/img/cart.svg'

const EmptyBasket: React.FC = () => {
  return (
    <div className='EmptyBasket'>
          <h2>корзина пустая</h2>
          <img src={svg} alt="" />
    </div>
  );
};

export default EmptyBasket;
