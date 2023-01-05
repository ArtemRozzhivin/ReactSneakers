import React from 'react';
import {
  addItemCart,
  CartSneakers,
  minusItemCart,
  removeItemCart,
} from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';

const CartItemSneakers: React.FC<CartSneakers> = ({
  id,
  imageUrl,
  price,
  rating,
  title,
  count,
}) => {
  const dispatch = useAppDispatch();

  const removeItem = () => {
    if (window.confirm('Видалити товар з корзини?')) {
      dispatch(removeItemCart({ id }));
    }
  };

  const plusItem = () => {
    const item = {
      id,
      imageUrl,
      price,
      rating,
      title,
      count,
    };
    dispatch(addItemCart(item));
  };

  const minusItem = () => {
    dispatch(minusItemCart({ id }));
  };

  return (
    <div className="relative border rounded-3xl flex items-center justify-between p-2 xl:p-5">
      <div className="mr-5 mb-2">
        <img width={70} height={70} src={imageUrl} alt="Sneakers" />
      </div>
      <div className="grow text-sm lg:text-base mr-3">
        <p>{title}</p>
        <div className="flex text-sm flex-col xl:flex-row xl:items-center justify-between">
          <div>{price} грн</div>
          <div className="flex justify-between items-center mt-5 xl:mt-0">
            <div className="flex items-center">
              <Button
                disabled={count <= 1}
                onClick={minusItem}
                className="disabled:opacity-50"
                small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </Button>
              <div className="mx-2">{count}</div>
              <Button onClick={plusItem} small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </Button>
            </div>
            <div className="font-bold ml-5">{count * price} грн</div>
          </div>
        </div>
      </div>
      <div>
        <Button className="absolute bg-white top-2 right-4 lg:static" onClick={removeItem} small>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.61539 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
              fill="#B5B5B5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default CartItemSneakers;
