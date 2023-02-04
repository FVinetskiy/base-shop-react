
import { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type product = {
  id: string;
  title:string;
  price: number;
  imageurl: string;
  sizes: number[];
  types: number[];
  category: number;
  count: number;
}

export type SearchProductParams = {
  category: string;
  search: string;
  page: string;
  sort: any
}

export const fetchProduct = createAsyncThunk<product[], SearchProductParams>(
  'product/fetchProductStatus',
  async (params) => {
    const { category, search, page, sort } = params;
    
    const { data } = await axios.get<product[]>(
      `https://63ba79d34482143a3f28546c.mockapi.io/items?page=${page}&limit=4&${category}&sortBy=${sort.sortProperty}&order=asc&${search}`
    );
    
    return data;
  }
  
);

interface ProductState {
  items:  product[]
  status: 'loading' | 'succes' | 'error'
}

const initialState : ProductState = {
  items: [],
  status: 'loading'
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state , action) => { 
      state.status = 'loading';
      state.items = [];
    })
    builder.addCase(fetchProduct.fulfilled, (state , action) => { 
      state.status = 'succes';
      state.items = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state , action) => { 
      state.items = [];
      state.status = 'error';
    })
  }
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
// selector
export const selectProduct = (state: RootState) => state.productSlice;
