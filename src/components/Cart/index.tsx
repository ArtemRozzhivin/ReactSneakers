import React, { useEffect, useRef, useState } from 'react';
import { MouseEventClick } from '../../@types/types';
import { clearAllItem, CartSneakers } from '../../redux/slices/cartSlice';
import { addItemsPurchase } from '../../redux/slices/purchaseSlice';
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
      dispatch(addItemsPurchase([...items]));
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
          className="hidden md:block fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-30 transition-all"></div>
        <div className="flex flex-col bg-white fixed top-0 right-0 w-full md:w-2/5 h-full z-30 p-3 sm:p-5">
          {renderCart()}
        </div>
      </div>
    </div>
  );
};

export default Cart;
