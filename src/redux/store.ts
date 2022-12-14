import sneakersReducer from './slices/sneakersSlice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    sneakers: sneakersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
