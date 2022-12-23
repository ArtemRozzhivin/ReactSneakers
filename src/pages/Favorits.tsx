import React from 'react';
import { useSelector } from 'react-redux';
import ItemSneakers from '../components/ItemSneakers';
import FavoritsEmpty from '../components/Marks/FavoritsEmpty';
import { addItemCart } from '../redux/slices/cartSlice';
import { itemToFavorits, selectFavorits } from '../redux/slices/favoritSlice';
import { Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';

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
      <div className="flex justify-between mb-10">
        <h4 className="font-bold text-3xl leading-10">Мої обрані</h4>
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
