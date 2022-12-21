import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { addItemCart } from '../redux/slices/cartSlice';
import { fetchSneakers, selectSneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import ItemSneakers from './ItemSneakers';

type ItemSneakers = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
};

const ItemList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sneakers, status } = useSelector(selectSneakers);

  const addItemToCart = (item: ItemSneakers) => {
    dispatch(addItemCart({ ...item, count: 1 }));
  };

  useEffect(() => {
    dispatch(fetchSneakers());
  }, []);

  if (!sneakers.length) {
    return <h2>Завантаження...</h2>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 gap-x-5">
        {sneakers.map((obj) => (
          <ItemSneakers addItemToCart={addItemToCart} key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
