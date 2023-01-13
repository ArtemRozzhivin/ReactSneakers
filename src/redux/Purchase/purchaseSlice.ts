import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSneakers } from '../Cart/types';
import { purchaseSliceType } from './types';

const initialState: purchaseSliceType = {
  items: [],
};

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addItemsPurchase: (state, action: PayloadAction<CartSneakers[]>) => {
      let copyItem: CartSneakers;

      if (state.items.length) {
        const check = action.payload.forEach((obj1) => {
          const checkItem = state.items.some((obj2) => {
            copyItem = obj2;
            return obj1.id === obj2.id;
          });

          if (checkItem) {
            copyItem.count += obj1.count;
          } else {
            state.items.push(obj1);
          }
        });
        console.log(check);
      } else {
        state.items = action.payload;
      }
    },
  },
});

export const { addItemsPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
