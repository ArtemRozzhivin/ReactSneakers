import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartSneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
  count: number;
};

interface cartSliceType {
  items: CartSneakers[];
  totalCount: number;
  totalPrice: number;
  tax: number;
  visibleCart: boolean;
}

const initialState: cartSliceType = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  tax: 0,
  visibleCart: false,
};

const calcTax = (sum: number, rate: number = 5) => {
  const res = (rate / 100) * sum;
  return Number(res.toFixed(2));
};

const calcTotalPrice = (items: CartSneakers[]) => {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};

const calcTotalCount = (items: CartSneakers[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
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

export const selectCartItems = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItemCart, minusItemCart, clearAllItem, removeItemCart, setVisibleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
