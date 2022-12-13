import React from 'react';
import cx from 'clsx';

type ButtonProps = {
  buy?: boolean;
  small?: boolean;
  children: string | any;
};

const Button: React.FC<ButtonProps> = ({ children, buy, small }) => {
  return (
    <button
      className={cx('', {
        'px-10 w-full font-semibold leading-5 text-center py-5 bg-green-500 text-white rounded-3xl hover:brightness-110 active:brightness-100 transition-all':
          buy,
        'p-2 rounded-lg border inline-block': small,
      })}>
      {children}
    </button>
  );
};

export default Button;

//
