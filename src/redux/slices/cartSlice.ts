import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs';
import { RootState } from '../store';

export type CartSneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
  count: number;
};

interface cartSliceType {
  items: CartSneakers[];
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

const calcTax = (sum: number, rate: number = 5) => {
  const res = (rate / 100) * sum;
  return Number(res.toFixed(2));
};

const calcTotalPrice = (items: CartSneakers[]) => {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};

const calcTotalCount = (items: CartSneakers[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartSneakers>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.items.push({ ...action.payload });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
      state.tax = calcTax(state.totalPrice);
    },
    minusItemCart: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);

      if (item && item.count > 1) {
        item.count--;

        state.totalPrice = calcTotalPrice(state.items);
        state.totalCount = calcTotalCount(state.items);
        state.tax = calcTax(state.totalPrice);
      }
    },
    removeItemCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
      state.tax = calcTax(state.totalPrice);
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

export const { addItemCart, minusItemCart, clearAllItem, removeItemCart } = cartSlice.actions;

export default cartSlice.reducer;
