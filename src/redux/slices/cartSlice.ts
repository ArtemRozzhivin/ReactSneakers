import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs';
import { RootState } from '../store';

export type Sneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
};

interface cartSliceType {
  items: Sneakers[];
  totalCount: number;
  totalPrice: number;
  tax: number;
}

const initialState: cartSliceType = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  tax: 0,
};

const toCountTax = (sum: number, rate: number) => {
  const res = (rate / 100) * sum;
  return Number(res.toFixed(2));
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<Sneakers>) => {
      state.items.push({ ...action.payload });
      state.totalPrice += action.payload.price;
      state.totalCount += 1;

      state.tax = toCountTax(state.totalPrice, 5);
    },
    removeItemCart: (state, action: PayloadAction<Sneakers>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);

      state.totalPrice -= action.payload.price;
      state.totalCount -= 1;
      state.tax = toCountTax(state.totalPrice, 5);
    },
    clearAllItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      state.tax = 0;
    },
  },
});

export const selectCartSneakers = (state: RootState) => state.cart;

export const { addItemCart, clearAllItem, removeItemCart } = cartSlice.actions;

export default cartSlice.reducer;
