import {
  DataTableFilterMetaData,
  DataTableOperatorFilterMetaData,
} from 'primereact/datatable';

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

export interface GenericFilter<T> extends DataTableFilterMetaData {
  value: null | T;
}

export interface ConstrainedFilter<T> extends DataTableOperatorFilterMetaData {
  constraints: GenericFilter<T>[];
}

export type Filter<T> = GenericFilter<T> | ConstrainedFilter<T>;

export type FilterableUser = Pick<User, 'sex' | 'birthdate' | 'registeredAt'>;

export type FiltersState = {
  [Property in keyof FilterableUser]: Filter<FilterableUser[Property]>;
} & {
  global: GenericFilter<string>;
};

export type UpdateFilters = <FilterName extends keyof FiltersState>(
  filterName: FilterName
) => <Value>(value: Value) => void;

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

export type UpdateUsersFunction = (
  cellId: string,
  value: string
) => Promise<void>;
