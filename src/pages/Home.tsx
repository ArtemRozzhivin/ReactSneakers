import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartPurchase from '../components/Cart';
import ItemList from '../components/ItemList';
import ItemSneakers from '../components/ItemSneakers';
import Search from '../components/Search';
import SortPopup from '../components/SortPopup';
import { selectFilters } from '../redux/slices/filterSlice';
import { fetchSneakers, selectSneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import Input from '../ui/Input';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sneakers } = useSelector(selectSneakers);
  const { searchValue, sortValue } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchSneakers({ searchValue, sortValue }));
  }, [searchValue, sortValue]);

  return (
    <div className="p-10 overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <h4 className="font-bold text-3xl leading-10">Всі кросівкі</h4>

        <SortPopup sortValue={sortValue} />
      </div>

      <ItemList items={sneakers} />
    </div>
  );
};

export default Home;
