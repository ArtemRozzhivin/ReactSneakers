import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterSliceType, sortValueType } from './types';

const initialState: filterSliceType = {
  searchValue: '',
  sortValue: { sort: 'rating', name: 'за популярністю', order: 'desc' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearching: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSorting: (state, action: PayloadAction<sortValueType>) => {
      state.sortValue = action.payload;
    },
  },
});

export const { setSearching, setSorting } = filterSlice.actions;

export default filterSlice.reducer;
