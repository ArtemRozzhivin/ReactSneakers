import { RootState } from '../store';

export const selectFavorits = (state: RootState) => state.favorit;
export const selectFavoritItemById = (id: string) => (state: RootState) =>
  state.favorit.items.find((obj) => obj.id === id);
