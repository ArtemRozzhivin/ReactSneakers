import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchSneakersProps, Sneakers } from './types';

export const fetchSneakers = createAsyncThunk(
  'users/fetchByIdStatus',
  async ({ searchValue, sortValue }: fetchSneakersProps) => {
    const { data } = await axios.get(
      `https://63975ac377359127a0351817.mockapi.io/sneakers?sortBy=${sortValue.sort}&order=${sortValue.order}`,
    );

    const searchingSneakers = data.filter((obj: Sneakers) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return searchingSneakers as Sneakers[];
  },
);
