import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, setVisibleCart } from '../redux/slices/cartSlice';
import { useAppDispatch } from '../redux/store';
import Burger from '../components/Burger';

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalCount, tax, visibleCart } = useSelector(selectCartItems);
  const [visibleBurger, setVisibleBurger] = useState(false);
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

    if (visibleBurger) setVisibleBurger(false);
  };

  const onClickVisibleBurger = (visible: boolean) => {
    setVisibleBurger(visible);
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

      <div>
        {visibleBurger && (
          <Burger onClickCart={onClickVisibleCart} onClickBurger={setVisibleBurger} />
        )}
      </div>

      <div className="sticky top-0 w-full z-20 bg-white border-b-2 p-2 md:p-4 lg:p-7">
        <Header
          onClickBurger={onClickVisibleBurger}
          onClickCart={onClickVisibleCart}
          totalPrice={totalPrice}
          totalCount={totalCount}
        />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
