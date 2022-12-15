import React from 'react';
import { Sneakers } from '../../redux/slices/cartSlice';
import Button from '../../ui/Button';
import CartItemSneakers from '../CartItemSneakers';
import CartEmpty from './CartEmpty';

type CartProps = {
  items: Sneakers[];
  totalPrice: number;
  setVisibleCart: (open: boolean) => void;
};

const Cart: React.FC<CartProps> = ({ items, totalPrice, setVisibleCart }) => {
  return (
    <div>
      {items.length ? (
        <div>
          <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div className="flex flex-col bg-white absolute right-0 w-96 h-full z-20 p-8">
            <div className="flex justify-between items-center mb-7">
              <h4 className="font-bold text-2xl leading-7">Корзина</h4>
              <Button onClick={() => setVisibleCart(false)} small>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.61539 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </Button>
            </div>
            <div className="grow">
              {items.map((obj) => (
                <div className="mb-4">
                  <CartItemSneakers key={obj.id} {...obj} />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <div className="flex justify-between relative">
                <p>До сплати:</p>
                <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
                <p>21 498 грн </p>
              </div>
              <div className="flex justify-between">
                <p>Податок:</p>
                <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
                <p>1074 грн </p>
              </div>
            </div>

            <div className="relative">
              <Button onClick={() => setVisibleCart} primary>
                Оформити замовлення
              </Button>
              <svg
                className="absolute top-6 right-7"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 7H14.7143"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.71436 1L14.7144 7L8.71436 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty setVisibleCart={setVisibleCart} />
      )}
    </div>
  );
};

export default Cart;
