import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
import { selectCartItems, setVisibleCart } from '../redux/slices/cartSlice';
import { useAppDispatch } from '../redux/store';
import Burger from '../components/Burger/Burger';

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalCount, tax, visibleCart } = useSelector(selectCartItems);
  const [visibleBurger, setVisibleBurger] = useState(false);
  const body = document.querySelector('body');

  // on/off body scroll when open burger or cart
  useEffect(() => {
    if ((visibleCart || visibleBurger) && body) {
      body.style.overflow = 'hidden';
    } else {
      if (body) body.style.overflow = 'auto';
    }
  }, [visibleCart, visibleBurger]);

  const onClickVisibleCart = (visible: boolean) => {
    dispatch(setVisibleCart(visible));
  };

  const onClickVisibleBurger = (visible: boolean) => {
    setVisibleBurger(visible);
  };

  return (
    <div>
      <Cart
        setVisibleCart={onClickVisibleCart}
        visibleCart={visibleCart}
        items={items}
        totalPrice={totalPrice}
        totalCount={totalCount}
        tax={tax}
      />

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
        <Burger
          isVisible={visibleBurger}
          onClickCart={onClickVisibleCart}
          onClickBurger={setVisibleBurger}
        />
      </div>
    </div>
  );
};

export default MainLayout;
