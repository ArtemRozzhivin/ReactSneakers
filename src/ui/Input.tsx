import React from 'react';
import cx from 'clsx';

type InputProps = {
  basic?: boolean;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ basic, className, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={cx(
        'px-4 py-2 w-full md:px-8 md:pr-12 md:py-4 md:text-lg leading-4 border rounded-xl outline-0 border-gray-400 hover:border-gray-600 hover:border transition-all duration-300 focus:shadow-2xl',
        {
          'px-8 py-4 text-lg leading-4 border rounded-xl outline-0 border-gray-400 hover:border-gray-600 hover:border transition-all duration-300 focus:shadow-2xl':
            basic,
        },
        className,
      )}
      placeholder={placeholder}
    />
  );
};

export default Input;
