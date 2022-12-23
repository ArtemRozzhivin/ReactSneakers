import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { addItemCart, selectCartSneakers } from '../redux/slices/cartSlice';
import { itemToFavorits } from '../redux/slices/favoritSlice';
import { selectFilters } from '../redux/slices/filterSlice';
import { fetchSneakers, selectSneakers, Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import ItemSneakers from './ItemSneakers';

const ItemList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sneakers } = useSelector(selectSneakers);
  const { searchValue } = useSelector(selectFilters);

  const addItemToCart = (item: Sneakers) => {
    dispatch(addItemCart({ ...item, count: 1 }));
  };

  const addItemToFavorits = (item: Sneakers) => {
    dispatch(itemToFavorits({ ...item }));
  };

  useEffect(() => {
    dispatch(fetchSneakers({ searchValue }));
  }, [searchValue]);

  if (!sneakers.length) {
    return <h2>Завантаження...</h2>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 gap-x-5">
        {sneakers.map((obj) => (
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
