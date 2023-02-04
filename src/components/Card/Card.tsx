import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import React from 'react'
import './Card.sass'

import { selectCart } from '../../redux/slices/cartSlice'

const Card: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart)
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)
  return (
      <Link className="card" to="Card">
        <span className="card__sum">{totalPrice} $</span>
        <span className="card__amount"> amount = {totalCount}</span>
      </Link>
  );
}

export default Card;
