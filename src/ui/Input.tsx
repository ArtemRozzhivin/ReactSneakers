import React from 'react';

const Input: React.FC = () => {
  return (
    <input
      className="px-8 py-4 leading-4 border rounded-xl outline-0 border-gray-400 hover:border-gray-600 hover:border transition-all duration-300 focus:shadow-2xl"
      placeholder="Пошук..."
    />
  );
};

export default Input;
