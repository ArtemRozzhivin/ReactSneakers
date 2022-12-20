import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartSneakers } from '../redux/slices/cartSlice';

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount, tax } = useSelector(selectCartSneakers);
  const [visibleCart, setVisibleCart] = useState(false);

  const onClickVisibleCart = (visible: boolean) => {
    setVisibleCart(visible);
  };

  return (
    <div>
      {visibleCart && (
        <Cart
          setVisibleCart={setVisibleCart}
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
