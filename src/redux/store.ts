import purchaseReducer from './Purchase/purchaseSlice';
import favoritReducer from './Favorit/favoritSlice';
import sneakersReducer from './Sneakers/sneakersSlice';
import cartReducer from './Cart/cartSlice';
import filterReducer from './Filter/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
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
