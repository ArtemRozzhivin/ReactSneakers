import React from 'react';
import Button from '../ui/Button';
import CartItemSneakers from './CartItemSneakers';

const Cart: React.FC = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="flex flex-col bg-white absolute right-0 w-96 h-full z-20 p-8">
        <h4 className="font-bold text-2xl leading-7 mb-7">Корзина</h4>

        <div className="grow">
          <div className="mb-4">
            <CartItemSneakers />
          </div>
          <div className="mb-4">
            <CartItemSneakers />
          </div>
          <div className="mb-4">
            <CartItemSneakers />
          </div>
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
          <Button buy>Оформити замовлення</Button>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cart;
