import { getSneakersFromLs } from '../../utils/getSneakersFromLS';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTax, calcTotalCount, calcTotalPrice } from '../../utils/calcCartInfo';
import { cartSliceType, CartSneakers } from './types';

const cartLocaleStorage = getSneakersFromLs();

const initialState: cartSliceType = {
  items: cartLocaleStorage,
  totalCount: calcTotalCount(cartLocaleStorage),
  totalPrice: calcTotalPrice(cartLocaleStorage),
  tax: calcTax(cartLocaleStorage),
  visibleCart: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartSneakers>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.items.push({ ...action.payload });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
      state.tax = calcTax(state.totalPrice);
    },
    minusItemCart: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);

      if (item && item.count > 1) {
        item.count--;

        state.totalPrice = calcTotalPrice(state.items);
        state.totalCount = calcTotalCount(state.items);
        state.tax = calcTax(state.totalPrice);
      }
    },
    removeItemCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
      state.tax = calcTax(state.totalPrice);
    },
    clearAllItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      state.tax = 0;
    },
    setVisibleCart: (state, action: PayloadAction<boolean>) => {
      state.visibleCart = action.payload;
    },
  },
});

export const { addItemCart, minusItemCart, clearAllItem, removeItemCart, setVisibleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
