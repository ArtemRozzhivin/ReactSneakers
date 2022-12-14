import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import CartBought from '../components/Cart/CartBought';
import CartEmpty from '../components/Cart/CartEmpty';
import CartPurchase from '../components/Cart';
import Header from '../components/Header';
import Cart from '../components/Cart';

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* <Cart /> */}
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
