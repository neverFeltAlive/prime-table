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

export type FiltersState = {
  [Property in keyof FilterableUser]: Filter<FilterableUser[Property]>;
} & {
  global: Filter<string>;
};

export type UpdateFilters = <FilterName extends keyof FiltersState>(
  filterName: FilterName
) => <Value extends FiltersState[FilterName]['value']>(value: Value) => void;

export const editableFields = [
  'username',
  'name',
  'lastName',
  'favouriteMusic',
  'favouriteSong',
] as const;

export type EditableFields = (typeof editableFields)[number];

export const dateFields = ['birthdate', 'registeredAt'] as const;

export type DateFields = (typeof dateFields)[number];

export type UserForm = Partial<Pick<User, EditableFields>>;
