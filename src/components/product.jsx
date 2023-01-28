import React, { useState } from 'react';

import { useSelector , useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'


const Product = (props) => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cartSlice.items.find((obj) => obj.id === props.id))
    const [activeType, setactiveType] = useState(0);
    const [activeSyze, setactiveSyze] = useState(0);
    const typeName = ['лучший', 'высший'];

    const AddCount = cartItem ? cartItem.count : 0
    
    const onClickAdd = () => {
        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            imageurl: props.imageurl,
            type: typeName[activeType],
            sizes: props.sizes[activeSyze]
        };
        dispatch(addItem(item))
    }
    return (
        <div className='product'>
            {props.imageurl ?
                <img className='product__img' src={props.imageurl} alt="" /> :
                <div className='product__img'>нет картинки</div>}
            <div className='product__content'>
                <p>{props.title}</p>
                <p>от {props.price} ₽</p>
                <div>
                    <ul className='product__filter'>
                        {props.types.map((type)=>
                            <li
                                key={type}
                                onClick={()=> setactiveType(type)} 
                                className={activeType === type ? 'active' : ''}>
                                {typeName[type]}
                            </li>)}
                    </ul>
                </div> 
                <div>
                    <ul className='product__filter'>
                        {props.sizes.map((item , index)=>
                            <li 
                                key={item}
                                onClick={()=> setactiveSyze(index)} 
                                className={activeSyze === index ? 'active' : ''}>
                                {item}
                            </li>)}
                    </ul>
                </div>

                <div className='buttons-count'>
                    <button onClick={onClickAdd}>добавить { AddCount > 0 && AddCount }</button>
                </div>
                <p>category {props.category}</p>
            </div>
        </div>
  );
}

export default Product;
