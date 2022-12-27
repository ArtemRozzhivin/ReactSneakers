import purchaseReducer from './slices/purchaseSlice';
import favoritReducer from './slices/favoritSlice';
import sneakersReducer from './slices/sneakersSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    sneakers: sneakersReducer,
    cart: cartReducer,
    filter: filterReducer,
    favorit: favoritReducer,
    purchase: purchaseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
