import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum
}

interface FilterState  {
  searchValue: string;
  categoryIndex: number;
  page: number;
  sort: Sort;
};
// стартовый стейт
const initialState: FilterState = {
  searchValue: '',
  categoryIndex: 0,
  page: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING
  },
};

// методы меняющие стейт
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number>) {
      state.categoryIndex = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

// вытащить методы и экспортировать
export const { setCategoryIndex, setSort, setPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer

export const selectFilterSort = (state: RootState) => state.filterSlice.sort;
export const selectFilter = (state: RootState) => state.filterSlice;



