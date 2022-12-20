import React from 'react';
import cx from 'clsx';

type ButtonProps = {
  primary?: boolean;
  primaryRed?: boolean;
  small?: boolean;
  className?: string;
  children: string | any;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  primary,
  primaryRed,
  small,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'hover:brightness-75 transition-all',
        {
          'px-10 w-full font-semibold leading-5 text-center py-5 bg-green-500 text-white rounded-3xl hover:brightness-110 active:brightness-100 transition-all':
            primary,
          'px-5 w-full font-semibold leading-5 text-center py-5 bg-red-500 text-white rounded-3xl hover:brightness-110 active:brightness-100 transition-all':
            primaryRed,
          'p-2 rounded-lg border inline-block hover:brightness-75 transition-all': small,
        },
        className,
      )}>
      {children}
    </button>
  );
};

export default Button;

//
