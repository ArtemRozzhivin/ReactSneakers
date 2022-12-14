import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type Sneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
};

enum Status {
  LOADING = 'loading',
  FULFILLED = 'completed',
  REJECTED = 'error',
}

interface SneakersSliceType {
  sneakers: Sneakers[];
  status: Status;
}

const initialState: SneakersSliceType = {
  sneakers: [],
  status: Status.LOADING,
};

export const fetchSneakers = createAsyncThunk('users/fetchByIdStatus', async () => {
  const { data } = await axios.get('https://63975ac377359127a0351817.mockapi.io/sneakers');
  return data;
});

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

export const selectSneakers = (state: RootState) => state.sneakers;

export const {} = sneakersSlice.actions;

export default sneakersSlice.reducer;
