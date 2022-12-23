import { RootState } from './../store';
import { Sneakers } from './sneakersSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface favoritSliceType {
  items: Sneakers[];
}

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

export const selectFavorits = (state: RootState) => state.favorit;

export const { itemToFavorits } = favoritSlice.actions;

export default favoritSlice.reducer;
