import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sneakers } from '../Sneakers/types';
import { favoritSliceType } from './types';

const initialState: favoritSliceType = {
  items: [],
};

export const favoritSlice = createSlice({
  name: 'favorit',
  initialState,
  reducers: {
    itemToFavorits: (state, action: PayloadAction<Sneakers>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);

      if (item) {
        state.items = state.items.filter((obj) => obj.id !== item.id);
      } else {
        state.items.push({ ...action.payload });
      }
    },
  },
});

export const { itemToFavorits } = favoritSlice.actions;

export default favoritSlice.reducer;
