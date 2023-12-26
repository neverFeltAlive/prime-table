import { FilterMatchMode } from 'primereact/api';

export interface User {
  userId: string;
  username: string;
  name: string;
  lastName: string;
  favouriteMusic: string;
  favouriteSong: string;
  sex: string;
  email: string;
  avatar: string;
  birthdate: Date;
  registeredAt: Date;
}

export interface Filter<T> {
  value: null | T;
  matchMode: FilterMatchMode;
}

export type FilterableUser = Pick<User, 'sex' | 'birthdate' | 'registeredAt'>;

export type FiltersStateType = {
  [Property in keyof FilterableUser]: Filter<FilterableUser[Property]>;
};

export type UpdateFilters = <FilterName extends keyof FiltersStateType>(
  filterName: FilterName
) => <Value extends FilterableUser[FilterName]>(value: Value) => void;
