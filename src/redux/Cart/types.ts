export type CartSneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
  count: number;
};

export interface cartSliceType {
  items: CartSneakers[];
  totalCount: number;
  totalPrice: number;
  tax: number;
  visibleCart: boolean;
}
