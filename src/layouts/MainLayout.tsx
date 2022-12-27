import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, setVisibleCart } from '../redux/slices/cartSlice';
import { useAppDispatch } from '../redux/store';

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalCount, tax, visibleCart } = useSelector(selectCartItems);
  const body = document.querySelector('body');

  useEffect(() => {
    if (visibleCart && body) {
      body.style.overflow = 'hidden';
    } else {
      if (body) body.style.overflow = 'auto';
    }
  }, [visibleCart]);

  const onClickVisibleCart = (visible: boolean) => {
    dispatch(setVisibleCart(visible));
  };

  return (
    <div>
      {visibleCart && (
        <Cart
          setVisibleCart={onClickVisibleCart}
          items={items}
          totalPrice={totalPrice}
          totalCount={totalCount}
          tax={tax}
        />
      )}

      <Header onClickCart={onClickVisibleCart} totalPrice={totalPrice} totalCount={totalCount} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
