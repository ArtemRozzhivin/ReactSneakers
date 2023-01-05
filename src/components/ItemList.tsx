import React from 'react';
import { addItemCart } from '../redux/slices/cartSlice';
import { itemToFavorits } from '../redux/slices/favoritSlice';
import { Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import ItemSneakers from './Sneakers/ItemSneakers';
import SneakersLoading from './Sneakers/SneakersLoading';

type ItemListProps = {
  items: Sneakers[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const dispatch = useAppDispatch();

  const addItemToCart = (item: Sneakers) => {
    dispatch(addItemCart({ ...item, count: 1 }));
  };

  const addItemToFavorits = (item: Sneakers) => {
    dispatch(itemToFavorits({ ...item }));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {!items.length
          ? [...Array(12)].map((_, index) => <SneakersLoading key={index} />)
          : items.map((obj) => (
              <ItemSneakers
                addItemToCart={addItemToCart}
                addItemToFavorits={addItemToFavorits}
                key={obj.id}
                {...obj}
              />
            ))}
      </div>
    </div>
  );
};

export default ItemList;
