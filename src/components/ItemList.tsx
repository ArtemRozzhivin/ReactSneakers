import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
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

  useEffect(() => {
    const data = dispatch(fetchSneakers());
    console.log(data);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 gap-x-5">
        {sneakers.map((obj) => (
          <ItemSneakers key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
