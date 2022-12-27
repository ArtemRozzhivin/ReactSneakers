import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { MouseEventClick } from '../@types/types';
import { selectFilters, setSorting, sortValueType } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';
import Button from '../ui/Button';

type SortPopupProps = {
  sortValue: sortValueType;
};

const sorting = [
  { sort: 'rating', name: 'за популярністю', order: 'desc' },
  { sort: 'price', name: 'за зростанням ціни', order: 'asc' },
  { sort: 'price', name: 'за зменшенням ціни', order: 'desc' },
];

const SortPopup: React.FC<SortPopupProps> = ({ sortValue }) => {
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLDivElement>(null);
  const [visiblePopup, setVisiblePopup] = useState(false);

  useEffect(() => {
    const hideSortPopup = (event: MouseEvent) => {
      const _event = event as MouseEventClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    };

    document.body.addEventListener('click', hideSortPopup);

    return () => {
      document.body.removeEventListener('click', hideSortPopup);
    };
  }, []);

  const changeVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const changeSorting = (obj: sortValueType) => {
    changeVisiblePopup();
    dispatch(setSorting(obj));
  };

  return (
    <div ref={sortRef} className="relative">
      <Button onClick={changeVisiblePopup} className="flex items-center" small>
        <div className="mr-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="gray">
            <path d="M15.9998 6.98997V16C15.9998 16.5523 16.4475 17 16.9998 17C17.5521 17 17.9998 16.5523 17.9998 16V6.98997L20.0324 6.98997C20.389 6.98997 20.5674 6.55862 20.3149 6.30677L17.706 3.70443C17.3157 3.31508 16.6839 3.31508 16.2936 3.70443L13.6847 6.30677C13.4322 6.55861 13.6106 6.98997 13.9672 6.98997H15.9998ZM10.3149 16.6932C10.5674 16.4413 10.389 16.01 10.0324 16.01H7.99981L7.99981 6.99997C7.99981 6.44769 7.5521 5.99997 6.99981 5.99997C6.44753 5.99997 5.99981 6.44769 5.99981 6.99997L5.99981 16.01H3.96721C3.6106 16.01 3.43225 16.4413 3.68472 16.6932L6.29359 19.2955C6.68391 19.6849 7.31571 19.6849 7.70603 19.2955L10.3149 16.6932Z"></path>
          </svg>
        </div>

        <div className="text-left">
          <h3 className="uppercase text-sm">Сортування</h3>
          <div className="text-xs font-light">{sortValue.name}</div>
        </div>
      </Button>
      {visiblePopup && (
        <div className="absolute bg-white top-14 left-0 z-10 rounded-lg shadow-xl">
          <ul className="border rounded-lg py-1 text-left">
            {sorting.map((obj) => (
              <li
                onClick={() => changeSorting(obj)}
                className="px-2 py-2 text-sm hover:bg-slate-200 transition-all cursor-pointer"
                key={obj.name}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
