import { createSlice } from '@reduxjs/toolkit';
import { SneakersSliceType, Status } from './types';
import { fetchSneakers } from './asyncFetchSneakers';

const initialState: SneakersSliceType = {
  sneakers: [],
  status: Status.LOADING,
};

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.sneakers = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.sneakers = action.payload;
      state.status = Status.FULFILLED;
    });

    builder.addCase(fetchSneakers.rejected, (state) => {
      state.sneakers = [];
      state.status = Status.REJECTED;
    });
  },
});

export const {} = sneakersSlice.actions;

export default sneakersSlice.reducer;
