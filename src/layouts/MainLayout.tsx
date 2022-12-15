import React, { useState } from 'react';
import { Outlet, Route } from 'react-router-dom';
import CartBought from '../components/Cart/CartBought';
import CartEmpty from '../components/Cart/CartEmpty';
import CartPurchase from '../components/Cart';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartSneakers } from '../redux/slices/cartSlice';

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectCartSneakers);
  const [visibleCart, setVisibleCart] = useState(false);

  const onClickVisibleCart = (visible: boolean) => {
    setVisibleCart(visible);
  };

  return (
    <div>
      {visibleCart && (
        <Cart setVisibleCart={setVisibleCart} items={items} totalPrice={totalPrice} />
      )}

      <Header onClickCart={onClickVisibleCart} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
