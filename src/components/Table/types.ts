import { ColumnProps } from 'primereact/column';
import { FiltersState, UpdateFilters, User } from 'types';

export interface UserColumn extends ColumnProps {
  field: keyof User;
}

export interface TableContext {
  updateFilters: UpdateFilters;
  filters: FiltersState | null;
}
