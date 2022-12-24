import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type sortValueType = {
  sort: string;
  name: string;
};

interface filterSliceType {
  searchValue: string;
  sortValue: sortValueType;
}

const initialState: filterSliceType = {
  searchValue: '',
  sortValue: { sort: 'popular', name: 'за популярністю' },
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

export const selectFilters = (state: RootState) => state.filter;

export const { setSearching, setSorting } = filterSlice.actions;

export default filterSlice.reducer;
