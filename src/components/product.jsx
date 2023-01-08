import React, { useState } from 'react';

const Product = (props) => {
    const [count, setCount] = useState(0);
    const [activeType, setactiveType] = useState(0);
    const [activeSyze, setactiveSyze] = useState(0);
    const typeName = [ 'лучший' , 'высший'];

    const addCount =()=> {
        setCount(count + 1)
    }

    const deletCount =()=> {
        setCount(count - 1)
    }

    return (
        <div className='product'>
            <img className='product__img' src={props.imageurl} alt="" />
            <div className='product__content'>
                <p>{props.text}</p>
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
                    <button onClick={addCount}>добавить</button>
                    <button disabled={count === 0} onClick={deletCount}>удалить</button>
                    <p>product count {count}</p>
                </div>
                <p>category {props.category}</p>
            </div>
        </div>
  );
}

export default Product;
