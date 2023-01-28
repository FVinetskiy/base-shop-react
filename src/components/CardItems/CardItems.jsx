import React from 'react'
import './CardItems.sass'
import { useDispatch } from 'react-redux'
import { addItem , removeItem , minusitem } from '../../redux/slices/cartSlice.js'

const CardItems = ({ id, title, price, type, sizes,  count, imageurl }) => {
    const dispatch = useDispatch()
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        )
    }

    const onClickRemove = () => {
        dispatch(
            minusitem(id)
        )
    }

    const onClickRemoveProduct = () => {
        dispatch(
            removeItem(id)
        )
    }

  return (
      <div className="basket-item">
        <div className="basket-item__head">
          <img className="basket-item__img" src={imageurl} alt="" />
          <div>
            <p>{title}</p>
                  <p>{type} { sizes }</p>
          </div>
        </div>
        <div className="basket-item__main">
          <button onClick={onClickRemove}  className="basket-item__button">-</button>
          <span>{count}</span> 
          <button onClick={onClickPlus} className="basket-item__button">+</button>
        </div>
        <div>{price * count} $</div>
        <button onClick={onClickRemoveProduct} className="basket-item__delete">delete product</button>
      </div>
  )
}

export default CardItems
