import { ColumnProps } from 'primereact/column';
import { FiltersStateType, UpdateFilters, User } from 'types';

export interface UserColumn extends ColumnProps {
  field: keyof User;
}

export interface TableContext {
  updateFilters: UpdateFilters;
  filters: FiltersStateType | null;
}
