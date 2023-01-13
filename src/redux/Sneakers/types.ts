import { sortValueType } from '../Filter/types';

export type Sneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
};

export enum Status {
  LOADING = 'loading',
  FULFILLED = 'completed',
  REJECTED = 'error',
}

export interface SneakersSliceType {
  sneakers: Sneakers[];
  status: Status;
}

export type fetchSneakersProps = {
  searchValue: string;
  sortValue: sortValueType;
};
