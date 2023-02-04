import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSort, selectFilterSort, SortPropertyEnum } from '../../redux/slices/filterSlice'

type SortListItem = {
  name: string,
  sortProperty: SortPropertyEnum
}

const list: SortListItem[] = [
    {name: 'популярность' , sortProperty : SortPropertyEnum.RATING},
    {name: 'цене' , sortProperty : SortPropertyEnum.PRICE},
    {name: 'алфавиту', sortProperty: SortPropertyEnum.TITLE },
];

const SortPopup = () => {
  const dispatch = useDispatch()
  const sort = useSelector(selectFilterSort)
  const sortRef = React.useRef(null)
  const [open, setOpen] = React.useState(false);
  // rating , price , title

  const onSetItem = (obj: SortListItem) => {
    dispatch(setSort(obj))
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      let path = event.composedPath().includes(sortRef.current);
      if (!path) {
        setOpen(false);
      }
      
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div>
      <div ref={sortRef} className="sort">
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

export default SortPopup;
