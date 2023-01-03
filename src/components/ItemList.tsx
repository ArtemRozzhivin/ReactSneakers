import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { addItemCart, selectCartItems } from '../redux/slices/cartSlice';
import { itemToFavorits } from '../redux/slices/favoritSlice';
import { selectFilters } from '../redux/slices/filterSlice';
import { fetchSneakers, selectSneakers, Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import ItemSneakers from './ItemSneakers';
import SneakersLoading from './SneakersLoading';

type ItemListProps = {
  items: Sneakers[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const dispatch = useAppDispatch();

  console.log(items);

  const addItemToCart = (item: Sneakers) => {
    dispatch(addItemCart({ ...item, count: 1 }));
  };

  const addItemToFavorits = (item: Sneakers) => {
    dispatch(itemToFavorits({ ...item }));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 gap-x-5 md:grid-cols-4">
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
