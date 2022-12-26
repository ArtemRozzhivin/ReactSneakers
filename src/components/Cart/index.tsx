import React, { useEffect, useRef, useState } from 'react';
import { MouseEventClick } from '../../@types/types';
import { clearAllItem, CartSneakers } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';
import CartBought from './CartBought';
import CartBuy from './CartBuy';
import CartEmpty from './CartEmpty';

type CartProps = {
  items: CartSneakers[];
  totalPrice: number;
  totalCount: number;
  tax: number;
  setVisibleCart: (open: boolean) => void;
};

const Cart: React.FC<CartProps> = ({ items, totalPrice, totalCount, tax, setVisibleCart }) => {
  const dispatch = useAppDispatch();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    const hideCart = (event: MouseEvent) => {
      const _event = event as MouseEventClick;
      console.log(_event.path);
      if (drawerRef.current && _event.path.includes(drawerRef.current)) {
        setVisibleCart(false);
      }
    };

    document.body.addEventListener('click', hideCart);

    return () => {
      document.body.removeEventListener('click', hideCart);
    };
  }, []);

  const toOrder = () => {
    if (window.confirm('Ви впевнені, що хочете оформити замовлення?')) {
      setBought(true);
      dispatch(clearAllItem());
    }
  };

  const renderCart = () => {
    if (items.length) {
      return (
        <CartBuy
          items={items}
          totalPrice={totalPrice}
          totalCount={totalCount}
          tax={tax}
          toOrder={toOrder}
          setVisibleCart={setVisibleCart}
        />
      );
    } else if (bought) {
      return <CartBought setVisibleCart={setVisibleCart} />;
    } else {
      return <CartEmpty setVisibleCart={setVisibleCart} />;
    }
  };

  return (
    <div>
      <div>
        <div
          ref={drawerRef}
          className="absolute top-0 right-0 w-full h-full bg-black bg-opacity-50 z-20 transition-all"></div>
        <div className="flex flex-col bg-white absolute right-0 w-2/5 h-full z-30 p-5">
          {renderCart()}
        </div>
      </div>
    </div>
  );
};

export default Cart;
