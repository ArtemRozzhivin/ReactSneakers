import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import ItemSneakers from '../components/ItemSneakers';
import PurchaseEmpty from '../components/Purchase/PurchaseEmpty';
import { addItemCart } from '../redux/slices/cartSlice';
import { itemToFavorits } from '../redux/slices/favoritSlice';
import { selectPurchase } from '../redux/slices/purchaseSlice';
import { Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import Button from '../ui/Button';

const Purchase: React.FC = () => {
  const { items } = useSelector(selectPurchase);

  return (
    <div>
      {items.length ? (
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
            <h4 className="ml-5 font-bold text-3xl leading-10">Мої покупки</h4>
          </div>
          <div>
            <ItemList items={items} />
          </div>
        </div>
      ) : (
        <PurchaseEmpty />
      )}
    </div>
  );
};

export default Purchase;
