import { useSelector , useDispatch } from 'react-redux'
import { clearItem } from '../../redux/slices/cartSlice'
import { Link } from "react-router-dom";
import EmptyBasket  from '../emptyBasket/emptyBasket'
import CardItems from '../CardItems/CardItems';
import './Basket.sass'

const Basket = () => {
  const dispatch = useDispatch()
  const  items  = useSelector((state) => state.cartSlice.items)
  const { totalPrice } = useSelector((state) => state.cartSlice)
  const itemsmap = items.map(item => <CardItems key={item.id} {...item} />)
  const totalCount = items.reduce((sum, item) => sum + item.count , 0)
  const clearAll = () => {
      dispatch(clearItem())
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
          <button className="basket__payment">оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
