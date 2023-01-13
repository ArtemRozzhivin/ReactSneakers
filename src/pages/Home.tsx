import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemList from '../components/ItemList';
import SortPopup from '../components/SortPopup';
import { selectFilters } from '../redux/Filter/selectors';
import { fetchSneakers } from '../redux/Sneakers/asyncFetchSneakers';
import { selectSneakers } from '../redux/Sneakers/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sneakers } = useSelector(selectSneakers);
  const { sortValue } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchSneakers({ sortValue }));
  }, [sortValue]);

  return (
    <div className="p-2 pt-5 md:p-10 min-h-[100vh] overflow-hidden">
      <div className="flex justify-between items-center mb-5  md:mb-10">
        <h4 className="font-bold text-2xl md:text-3xl leading-10">Всі кросівкі</h4>

        <SortPopup sortValue={sortValue} />
      </div>

      <ItemList items={sneakers} />
    </div>
  );
};

export default Home;
