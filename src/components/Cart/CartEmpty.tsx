import React from 'react';
import Button from '../../ui/Button';

type CartEmptyProps = {
  setVisibleCart: (open: boolean) => void;
};

const CartEmpty: React.FC<CartEmptyProps> = ({ setVisibleCart }) => {
  return (
    <>
      <h4 className="font-bold text-2xl leading-7 mb-7">Корзина</h4>
      <div className="flex flex-col grow justify-center items-center w-full">
        <img className="mb-5" src="assets/emptyCart.png" alt="CartEmpty" />
        <h3 className="mb-2 text-2xl leading-7 font-semibold">Корзина порожня</h3>
        <div className="mb-10 leading-6 text-center opacity-40">
          Додайте хоча б одну пару кросівок, щоб зробити замовлення.
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
    </>
  );
};

export default CartEmpty;
