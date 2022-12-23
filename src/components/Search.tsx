import React, { useCallback, useState } from 'react';
import { setSearching } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';
import debounce from 'lodash.debounce';
import Input from '../ui/Input';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onUpdateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearching(str));
      console.log(str);
    }, 400),
    [],
  );

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onUpdateSearch(e.target.value);
  };

  return (
    <div className="relative">
      <svg
        className="absolute top-4 left-2"
        width="19"
        height="19"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
          stroke="#E4E4E4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <Input value={value} onChange={(e) => onChangeValue(e)} placeholder="Пошук..." />
      </div>
    </div>
  );
};

export default Search;
