import { createSlice } from '@reduxjs/toolkit';

// стартовый стейт
const initialState = {
  totalPrice: 0,
  items: [],
};

// методы меняющие стейт
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum
    //   }, 0)
    // },
    addItem(state, action) {
      const finditem = state.items.find((obj) => obj.id === action.payload.id);
      if (finditem) {
        finditem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0
    },
    plusitem(state, action) {
      const finditem = state.items.find((obj) => obj.id === action.payload);
      if (finditem) {
        finditem.count++;
      }
    },
    minusitem(state, action) {
      const finditem = state.items.find((obj) => obj.id === action.payload);
      if (finditem) {
        finditem.count--;
      }
    }
  },
});

// вытащить методы и экспортировать
export const { addItem, removeItem, clearItem, minusitem } =
  cartSlice.actions;

export default cartSlice.reducer;
