import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const PurchaseEmpty = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div className="flex justify-center mb-6">
        <img height={70} width={70} src="assets/crySmile.png" alt="Sad" />
      </div>
      <h3 className="font-semibold text-2xl leading-7 text-center mb-2">У вас немає замовлень</h3>
      <div className="opacity-40 leading-6 mb-10">Будь ласка, оформіть хоча б одне замовлення.</div>
      <Link to="/" className="relative w-1/3">
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
      </Link>
    </div>
  );
};

export default PurchaseEmpty;
