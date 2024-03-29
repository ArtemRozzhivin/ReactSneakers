import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addItemCart } from '../redux/Cart/cartSlice';
import { itemToFavorits } from '../redux/Favorit/favoritSlice';
import { selectFilters } from '../redux/Filter/selectors';
import { Sneakers } from '../redux/Sneakers/types';
import { useAppDispatch } from '../redux/store';
import { searchFromList } from '../utils/searchFromList';
import ThreeDotsWave from './Loaders/ThreeDotsWave';
import ItemSneakers from './Sneakers/ItemSneakers';
import SneakersLoading from './Sneakers/SneakersLoading';

type ItemListProps = {
  items: Sneakers[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const [searchingItem, setSearchingItem] = useState<Sneakers[]>(items);
  const { searchValue } = useSelector(selectFilters);

  useEffect(() => {
    setSearchingItem(searchFromList(items, searchValue));
  }, [items, searchValue]);

  const addItemToCart = (item: Sneakers) => {
    dispatch(addItemCart({ ...item, count: 1 }));
  };

  const addItemToFavorits = (item: Sneakers) => {
    dispatch(itemToFavorits({ ...item }));
  };

	const renderLoad = () => {
		if(window.screen.availWidth < 700){
			return <div className='flex justify-center items-center h-[70vh]'>
				<div>
				<ThreeDotsWave/>
				</div>
			</div>
		} else{
			return (
				<div className="grid grid-cols-2 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-4">
					{[...Array(4)].map((_, index) => (<SneakersLoading key={index} />))}
				</div>
			)
		}
	}

  return (
    <>
      {!items.length
				? renderLoad()
        : <div className="grid grid-cols-2 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-4">
						{searchingItem.map((obj) => (
							<ItemSneakers
                addItemToCart={addItemToCart}
                addItemToFavorits={addItemToFavorits}
                key={obj.id}
                {...obj}
              />
							))}
					</div>
			}
      </>
  );
};

export default ItemList;
