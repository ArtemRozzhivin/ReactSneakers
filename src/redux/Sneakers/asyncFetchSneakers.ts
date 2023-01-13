import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchSneakersProps, Sneakers } from './types';

export const fetchSneakers = createAsyncThunk(
  'users/fetchByIdStatus',
  async ({ sortValue }: fetchSneakersProps) => {
    const { data } = await axios.get(
      `https://63975ac377359127a0351817.mockapi.io/sneakers?sortBy=${sortValue.sort}&order=${sortValue.order}`,
    );

    return data as Sneakers[];
  },
);
