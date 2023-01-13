import { RootState } from '../store';
import { CartSneakers } from './types';

export const selectCartItems = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj: CartSneakers) => obj.id === id);
