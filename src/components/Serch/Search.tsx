import './search.sass'
import React from 'react'
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const [value , setValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dispatch = useDispatch() 

  const onClickClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setSearchValue(''))
    setValue('')
    // if (inputRef.current) {
    //   inputRef.current.focus()
    // }
    inputRef.current?.focus()
  }

  const updateSearchValue = React.useCallback(
      debounce((str: string) => {
        dispatch(setSearchValue(str))
      }, 150),
    [],
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value)
    setValue(event.target.value)
  }

  return (
    <div className="search">
      <input
              ref={inputRef}
              value={value}
              onChange={onChangeInput}
              placeholder='поиск'
              className="search__input"
              type="text" />
          {
              value && (
                  <button onClick={onClickClear} className="search__button">x</button>
              )
          }
          
    </div>
  );
}

export default Search;
