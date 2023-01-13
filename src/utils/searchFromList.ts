import { Sneakers } from '../redux/Sneakers/types';

export const searchFromList = (data: Sneakers[], searchValue: string) => {
  const searchingItems = data.filter((obj: Sneakers) =>
    obj.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return searchingItems;
};
