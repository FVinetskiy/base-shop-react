import './search.sass'
import { SearchContext } from '../../App'
import React from 'react'
import { debounce } from 'lodash';



const Search = () => {
  const [value , setValue] = React.useState('')
  const { setSearchValue } = React.useContext(SearchContext)
  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 1000),
    [],
  )

  const onChangeInput = (event) => {
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
