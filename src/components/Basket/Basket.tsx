import { useSelector , useDispatch } from 'react-redux'
import { clearItem } from '../../redux/slices/cartSlice'
import { Link } from "react-router-dom";
import EmptyBasket  from '../emptyBasket/emptyBasket'
import CardItems from '../CardItems/CardItems';
import { selectCart } from '../../redux/slices/cartSlice'
import React from 'react'
import './Basket.sass'

const Basket: React.FC = () => {
  const dispatch = useDispatch()
  const { totalPrice , items} = useSelector(selectCart)
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)
  const itemsmap = items.map((items:any) => <CardItems key={items.id} {...items} />)
  const isMounted = React.useRef(false)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)
      isMounted.current = true
    }
  },[items])

  const clearAll = () => {
      dispatch(clearItem())
  }

  const payment = () => {
    alert( ` оплата прошла успешно , сумма заказа  ${totalPrice} $ ` )
  }

  if (!totalPrice) {
    return (
      <EmptyBasket/>
    )
  }

  return (
    <div className="basket">
      <div className="basket__head">
        <h1 className="basket__title">корзина</h1>
        <button onClick={clearAll} className="basket__clear">очистить корзину</button>
      </div>
      {itemsmap}
      <div className="basket__footer">
        <div className="basket__footer-content">
          <p>всего заказов  {  totalCount  }</p>
          <p>сумма заказа <span className="basket__price">{totalPrice} $</span></p>
        </div>
        <div className="basket__footer-content">
          <Link className="basket__link-back" to='/'>назад</Link>
          <button onClick={payment} className="basket__payment">оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
