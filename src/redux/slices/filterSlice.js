import { createSlice } from '@reduxjs/toolkit';

// стартовый стейт
const initialState = {
  categoryIndex: 0,
  page: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

// методы меняющие стейт
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    }
  },
});

// вытащить методы и экспортировать
export const { setCategoryIndex, setSort, setPage } = filterSlice.actions;

export default filterSlice.reducer

