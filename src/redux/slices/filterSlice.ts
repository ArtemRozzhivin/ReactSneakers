import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface filterSliceType {
  searchValue: string;
}

const initialState: filterSliceType = {
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearching: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilters = (state: RootState) => state.filter;

export const { setSearching } = filterSlice.actions;

export default filterSlice.reducer;
