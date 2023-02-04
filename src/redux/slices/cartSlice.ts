import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'
import { geLocalStorage } from '../../utils/geLocalStorage';
import { calkTotalPrice } from '../../utils/calkTotalPrice';

export type CartItemType = {
  id: string
  title: string
  price: number
  imageurl: string
  type: string
  sizes: number
  count: number
}

interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}


const { items , totalPrice } = geLocalStorage()

const initialState: CartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const finditem = state.items.find((obj) => obj.id === action.payload.id);
      if (finditem) {
        finditem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calkTotalPrice(state.items)
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calkTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0
    },
    plusitem(state, action: PayloadAction<string>) {
      const finditem = state.items.find((obj) => obj.id === action.payload);
      if (finditem) {
        finditem.count++;
      }
    },
    minusitem(state, action: PayloadAction<string>) {
      const finditem = state.items.find((obj) => obj.id === action.payload);
      if (finditem) {
        finditem.count--;
      }
      state.totalPrice = calkTotalPrice(state.items);
    }
  },
});

export const { addItem, removeItem, clearItem, minusitem } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState ) => state.cartSlice;
export const selectCartIdItem = ( id : string) => ( state: RootState ) => state.cartSlice.items.find((obj) => obj.id === id);

