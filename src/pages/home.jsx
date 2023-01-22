import Products from '../components/Products';
import Paginations from '../components/Pagination/Paginations';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import React from 'react';
import { SearchContext } from '../App'
import axios from 'axios';
// redux
import { useSelector , useDispatch } from 'react-redux'
import { setCategoryIndex , setPage } from '../redux/slices/filterSlice'

const Home = () => {
  // redux
  const categoryIndex = useSelector((state) => state.filterSlice.categoryIndex)
  const sort = useSelector(state => state.filterSlice.sort)
  const page = useSelector(state => state.filterSlice.page)
  const dispatch = useDispatch() 
  // redux:end

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isloading, setIsloading] = React.useState(true);

  const onClickCategory = (i) => {
    dispatch(setCategoryIndex(i))
  }

  const onChangePage = (number) => {
    dispatch(setPage(number))
  }

  

  React.useEffect(() => {
    setIsloading(true);
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''
    const search = searchValue ? `search=${searchValue}` : ''
    // fetch(`https://63ba79d34482143a3f28546c.mockapi.io/items?page=${page}&limit=4&${category}&sortBy=${sort.sortProperty}&order=asc&${search}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsloading(false);
    //   });
    axios.get(`https://63ba79d34482143a3f28546c.mockapi.io/items?page=${page}&limit=4&${category}&sortBy=${sort.sortProperty}&order=asc&${search}`)
      .then((res) => {
        setItems(res.data);
        setIsloading(false);
      })
    window.scrollTo(0, 0);
  }, [categoryIndex, sort , searchValue , page]);

  return (
    <div className="">
      <div className="main-filter">
        <Categories categoryIndex={ categoryIndex } onClickCategory={onClickCategory} />
        <Sort  />
      </div>
      <Products searchValue={ searchValue} isloading={isloading} arrProduct={items} />
      <Paginations onChangePage={ onChangePage } />
    </div>
  );
};

export default Home;
