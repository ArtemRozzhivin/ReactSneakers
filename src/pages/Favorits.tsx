import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import FavoritsEmpty from '../components/Farorits/FavoritsEmpty';
import Button from '../ui/Button';
import { selectFavorits } from '../redux/Favorit/selectors';

const Favorits: React.FC = () => {
  const { items } = useSelector(selectFavorits);

  if (!items.length) {
    return <FavoritsEmpty />;
  }

  return (
    <div className="p-2 min-h-[100vh] pt-5 md:p-10">
      <div className="flex items-center mb-5 md:mb-10">
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
        <h4 className="font-bold text-2xl md:text-3xl leading-10 ml-5">Мої обрані</h4>
      </div>
      <div className="">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Favorits;
