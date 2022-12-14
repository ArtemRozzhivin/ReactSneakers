import React from 'react';
import Button from '../../ui/Button';

const CartEmpty: React.FC = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="flex flex-col bg-white absolute right-0 w-96 h-full z-20 p-8">
        <h4 className="font-bold text-2xl leading-7 mb-7">Корзина</h4>

        <div className="flex flex-col grow justify-center items-center w-full">
          <img className="mb-5" src="assets/emptyCart.png" alt="CartEmpty" />
          <h3 className="mb-2 text-2xl leading-7 font-semibold">Корзина порожня</h3>
          <div className="mb-10 leading-6 text-center opacity-40">
            Додайте хоча б одну пару кросівок, щоб зробити замовлення.
          </div>
          <div className="relative w-full">
            <Button primary>Повернутися назад</Button>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 13L1 7L7 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
