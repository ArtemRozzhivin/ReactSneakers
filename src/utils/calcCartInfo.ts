import { CartSneakers } from '../redux/Cart/types';

export const calcTax = (sum: number, rate: number = 5) => {
  const res = (rate / 100) * sum;
  return Number(res.toFixed(2));
};

export const calcTotalPrice = (items: CartSneakers[]) => {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};

export const calcTotalCount = (items: CartSneakers[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};
