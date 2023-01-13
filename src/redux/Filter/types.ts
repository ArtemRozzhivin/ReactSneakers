export type sortValueType = {
  sort: string;
  name: string;
  order: string;
};

export interface filterSliceType {
  searchValue: string;
  sortValue: sortValueType;
}
