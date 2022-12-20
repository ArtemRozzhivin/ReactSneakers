import React from 'react';
import Button from '../../ui/Button';

type CartBought = {
  setVisibleCart: (open: boolean) => void;
};

const CartBought: React.FC<CartBought> = ({ setVisibleCart }) => {
  return (
    <div>
      <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="flex flex-col bg-white absolute right-0 w-96 h-full z-20 p-8">
        <h4 className="font-bold text-2xl leading-7 mb-7">Корзина</h4>

        <div className="flex flex-col grow justify-center items-center w-full">
          <img height={120} width={83} className="mb-5" src="assets/bought.png" alt="CartEmpty" />
          <h3 className="mb-2 text-2xl leading-7 font-semibold">Замовлення оформлено</h3>
          <div className="mb-10 leading-6 text-center opacity-40">
            Ваше замовлення #18 скоро буде передано кур'єрській доставці.
          </div>
          <div className="relative w-full">
            <Button onClick={() => setVisibleCart(false)} primary>
              Повернутися назад
            </Button>
            <svg
              className="absolute top-6 left-8"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.7144 7L1.00007 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 13L1 7L7 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBought;
