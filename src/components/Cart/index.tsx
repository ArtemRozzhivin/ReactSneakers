import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearAllItem, CartSneakers } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';
import CartItemSneakers from '../CartItemSneakers';
import CartBought from './CartBought';
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
  const [bought, setBought] = useState(false);

  const toOrder = () => {
    setBought(true);
  };

  const clearCart = () => {
    if (window.confirm('Видалити всі товари з корзини?')) {
      dispatch(clearAllItem());
    }
  };

  if (bought) {
    if (window.confirm('Ви впевнені, що хочете оформити замовлення?')) {
      return <CartBought setVisibleCart={setVisibleCart} />;
    }
  }

  return (
    <div>
      {items.length ? (
        <div>
          <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div className="flex flex-col bg-white absolute right-0 w-2/5 h-full z-20 p-5">
            <div className="flex justify-between items-center mb-7">
              <div>
                <Button onClick={() => setVisibleCart(false)} small>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.7144 7L1.00007 7"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
              <div>
                <Button onClick={clearCart} small>
                  Очистити корзину
                </Button>
              </div>
              <h4 className="font-bold text-2xl leading-7">Корзина</h4>
            </div>
            <div className="grow overflow-scroll overflow-x-hidden">
              {items.map((obj) => (
                <div key={obj.id} className="mb-4 last:mb-0">
                  <CartItemSneakers {...obj} />
                </div>
              ))}
            </div>

            <div className="my-4">
              <div className="flex justify-between">
                <p>Кількість товарів:</p>
                <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
                <p className="leading-5 font-semibold">{totalCount} пари </p>
              </div>
              <div className="flex justify-between">
                <p>До сплати:</p>
                <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
                <p className="leading-5 font-semibold">{totalPrice} грн </p>
              </div>
              <div className="flex justify-between">
                <p>Податок 5%:</p>
                <div className="grow border-b border-dashed border-black h-5 mx-1"></div>
                <p className="leading-5 font-semibold">{tax} грн </p>
              </div>
            </div>

            <div className="relative">
              <Button onClick={toOrder} primary>
                Оформити замовлення
              </Button>
              <svg
                className="absolute top-6 right-7"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 7H14.7143"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.71436 1L14.7144 7L8.71436 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty setVisibleCart={setVisibleCart} />
      )}
    </div>
  );
};

export default Cart;
