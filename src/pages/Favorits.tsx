import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemSneakers from '../components/ItemSneakers';
import FavoritsEmpty from '../components/Marks/FavoritsEmpty';
import { addItemCart } from '../redux/slices/cartSlice';
import { itemToFavorits, selectFavorits } from '../redux/slices/favoritSlice';
import { Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import Button from '../ui/Button';

const Favorits: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectFavorits);

  const addItemToCart = (item: Sneakers) => {
    dispatch(addItemCart({ ...item, count: 1 }));
  };

  const addItemToFavorits = (item: Sneakers) => {
    dispatch(itemToFavorits({ ...item }));
  };

  if (!items.length) {
    return <FavoritsEmpty />;
  }

  return (
    <div className="p-10">
      <div className="flex items-center mb-10">
        <Link to="/">
          <Button small>
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
        </Link>
        <h4 className="ml-5 font-bold text-3xl leading-10">Мої обрані</h4>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-5 gap-x-5">
          {items.map((obj) => (
            <ItemSneakers
              addItemToCart={addItemToCart}
              addItemToFavorits={addItemToFavorits}
              key={obj.id}
              {...obj}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorits;
