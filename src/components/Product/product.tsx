import React, { useState } from 'react';

import { useSelector , useDispatch } from 'react-redux'
import { CartItemType, addItem , selectCartIdItem } from '../../redux/slices/cartSlice'
import { Link } from "react-router-dom";

type ProductProps = {
    id:string,
    title:string,
    price: number,
    imageurl: string,
    sizes: number[],
    types: number[],
    category: number 
}

const Product:React.FC<ProductProps> = ({id , title , price , imageurl , sizes , types , category}) => {
    const dispatch = useDispatch()
    const cartItem:any = useSelector(selectCartIdItem(id))
    const [activeType, setactiveType] = useState(0);
    const [activeSyze, setactiveSyze] = useState(0);
    const typeName = ['лучший', 'высший'];

    const AddCount = cartItem ? cartItem.count : 0
    
    const onClickAdd = () => {
        const item: CartItemType = {
            id: id,
            title: title,
            price: price,
            imageurl: imageurl,
            type: typeName[activeType],
            sizes: sizes[activeSyze],
            count: 0
        };
        dispatch(addItem(item))
    }
    return (
        <div className='product'>
            <Link to={`product/${id}`}>
                <p>подробнее о товаре</p>
            </Link>
            
            {imageurl ?
                <img className='product__img' src={imageurl} alt="" /> :
                <div className='product__img'>нет картинки</div>}
            <div className='product__content'>
                <p>{title}</p>
                <p>от {price} ₽</p>
                <div>
                    <ul className='product__filter'>
                        {types.map((type:any)=>
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
                        {sizes.map((item , index)=>
                            <li 
                                key={item}
                                onClick={()=> setactiveSyze(index)} 
                                className={activeSyze === index ? 'active' : ''}>
                                {item}
                            </li>)}
                    </ul>
                </div>

                <div className='buttons-count'>
                    <button onClick={onClickAdd}>
                        {AddCount > 0 ? 'добавить' : 'добавлено'}
                        {AddCount > 0 && AddCount}
                    </button>
                </div>
                <p>category {category}</p>
            </div>
        </div>
  );
}

export default Product;
