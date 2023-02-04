import Products from '../components/Products/Products';
import Paginations from '../components/Pagination/Paginations';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import React from 'react';
// redux
import { useSelector  } from 'react-redux'
import { setCategoryIndex, setPage , selectFilter } from '../redux/slices/filterSlice'
import { fetchProduct , selectProduct} from '../redux/slices/productSlice'
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const { items, status } = useSelector(selectProduct)
  const { page , sort , searchValue , categoryIndex } = useSelector(selectFilter)
  const dispatch = useAppDispatch() 

  // local
  const onClickCategory = (index:number) => {
    dispatch(setCategoryIndex(index))
  }
  const onChangePage = (number: number) => {
    dispatch(setPage(number))
  }
  const getProduct = async () => {
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''
    const search = searchValue ? `search=${searchValue}` : ''

    dispatch(
      fetchProduct({
        category,
        search,
        page : String(page),
        sort: String(sort),
    }))
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
      getProduct()
  }, [categoryIndex, sort , searchValue , page]);

  return (
    <div className="">
      <div className="main-filter">
        <Categories categoryIndex={ categoryIndex } onClickCategory={onClickCategory} />
        <Sort  />
      </div>
      <Products  status={status} arrProduct={items} />
      <Paginations onChangePage={ onChangePage } />
    </div>
  );
};

export default Home;
