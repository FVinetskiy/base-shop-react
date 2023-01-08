import React from 'react';

const MainFiltred = () => {
    const [count, setCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);

    const list = ['популярность', 'цена', 'алфавит']
    const valueFilter = ['все', 'фильтр1', 'фильтр2']

    const onSetItem = (index) => {
        setSelected(index)
        setOpen(false)
    }

    return (
        <div className="main-filter">
            <ul>
                {valueFilter.map((item, i) => 
                    <li className={count ===  i ? 'active' : ''} key={item} onClick={() => setCount(i)}>
                        {item + i}
                    </li>)}
            </ul>
            <div className='sort'>
                <div>сортировка по: <span onClick={()=> setOpen(!open)}>{list[selected]}</span> </div>
                {
                    open && <div className="sort__content">
                        {list.map((item , index)=>
                        <button 
                            key={item}
                            onClick={()=> onSetItem(index)} 
                            className={ selected === index ? 'active' : ''}>
                            {item}
                        </button>)}
                    </div>
                }
            </div>
        </div>
  );
}

export default MainFiltred;
