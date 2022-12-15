import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
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
}

const initialState: cartSliceType = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<Sneakers>) => {
      state.items.push({ ...action.payload });

      state.totalPrice += action.payload.price;
    },
  },
});

export const selectCartSneakers = (state: RootState) => state.cart;

export const { addItemCart } = cartSlice.actions;

export default cartSlice.reducer;
