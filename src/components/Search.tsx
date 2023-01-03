import React, { useCallback, useState } from 'react';
import { setSearching } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';
import debounce from 'lodash.debounce';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onUpdateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearching(str));
    }, 400),
    [],
  );

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onUpdateSearch(e.target.value);
  };

  const onClearValue = () => {
    setValue('');
    onUpdateSearch('');
  };

  return (
    <div className="w-full relative">
      <svg
        className="hidden absolute top-5 left-2 md:block"
        width="19"
        height="19"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
          stroke="#B5B5B5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <Input
          className="pr-10"
          value={value}
          onChange={(e) => onChangeValue(e)}
          placeholder="Пошук..."
        />
      </div>
      {value && (
        <Button onClick={onClearValue} className="absolute top-[10px] md:top-[21px] right-4">
          <svg
            width="17"
            height="17"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.61539 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
              fill="#B5B5B5"
            />
          </svg>
        </Button>
      )}
    </div>
  );
};

export default Search;
