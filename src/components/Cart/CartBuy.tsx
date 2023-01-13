import React from 'react';
import { clearAllItem } from '../../redux/Cart/cartSlice';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';
import CartItemSneakers from './CartItem/CartItemSneakers';
import { AnimatePresence, motion } from 'framer-motion';
import { CartSneakers } from '../../redux/Cart/types';

type CartBuyProps = {
  items: CartSneakers[];
  totalPrice: number;
  totalCount: number;
  tax: number;
  toOrder: () => void;
  setVisibleCart: (open: boolean) => void;
};

const CartBuy: React.FC<CartBuyProps> = ({
  items,
  totalPrice,
  totalCount,
  tax,
  toOrder,
  setVisibleCart,
}) => {
  const dispatch = useAppDispatch();

  const clearCart = () => {
    if (window.confirm('Видалити всі товари з корзини?')) {
      dispatch(clearAllItem());
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-7">
        <div>
          <Button onClick={() => setVisibleCart(false)} small>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.7144 7L1.00007 7"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 13L1 7L7 1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div>
          <Button onClick={clearCart} small>
            Очистити
          </Button>
        </div>
        <h4 className="font-bold text-2xl leading-7">Корзина</h4>
      </div>
      <div className="grow overflow-scroll overflow-x-hidden">
        <AnimatePresence>
          {items.map((obj) => (
            <motion.div
              key={obj.id}
              initial={{ x: '75vw', opacity: 0 }}
              animate={{ x: '0', opacity: 1 }}
              exit={{ x: '40vw', opacity: 0 }}
              className="mb-2 sm:mb-4 last:mb-0">
              <CartItemSneakers {...obj} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="my-4">
        <div className="flex justify-between">
          <p>Кількість товарів:</p>
          <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
          <p className="leading-5 font-semibold">{totalCount} пари </p>
        </div>
        <div className="flex justify-between">
          <p>До сплати:</p>
          <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
          <p className="leading-5 font-semibold">{totalPrice} грн </p>
        </div>
        <div className="flex justify-between">
          <p>Податок 5%:</p>
          <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
          <p className="leading-5 font-semibold">{tax} грн </p>
        </div>
      </div>

      <div className="relative mx-auto w-[210px] md:w-3/4">
        <Button onClick={toOrder} primary>
          Оформити замовлення
        </Button>
        <svg
          className="absolute top-8 md:top-6 right-7"
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
    </>
  );
};

export default CartBuy;
