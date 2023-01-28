import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";
import './Card.sass'


const Card = () => {
  const { items, totalPrice } = useSelector(state => state.cartSlice)
  const totalCount = items.reduce((sum, item) => sum + item.count , 0)
  return (
      <Link className="card" to="Card">
        <span className="card__sum">{totalPrice} $</span>
      <span className="card__amount">
        amount = {totalCount}
        </span>
      </Link>
  );
}

export default Card;
