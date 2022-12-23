import React from 'react';
import cx from 'clsx';

type InputProps = {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ className, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={cx(
        'px-8 py-4 leading-4 border rounded-xl outline-0 border-gray-400 hover:border-gray-600 hover:border transition-all duration-300 focus:shadow-2xl',
        {},
        className,
      )}
      placeholder={placeholder}
    />
  );
};

export default Input;
