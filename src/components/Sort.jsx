import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../redux/slices/filterSlice'

const Sort = () => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filterSlice.sort)

  const [open, setOpen] = React.useState(false);
  const list = [
      {name: 'популярность' , sortProperty : 'rating'},
      {name: 'цене' , sortProperty : 'price'},
      {name: 'алфавиту' , sortProperty : 'title'}
    ];
    // rating , price , title

  const onSetItem = (id) => {
    dispatch(setSort(id))
    setOpen(false);
  };

  return (
    <div>
      <div className="sort">
        <div>
          сортировка по:
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
          <div className="sort__content">
            {list.map((item, id) => (
              <button
                key={item.name}
                onClick={() => onSetItem(item)}
                className={sort.sortProperty === item.sortProperty ? 'active' : ''}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
