import { ColumnProps } from 'primereact/column';
import { User } from 'types';

export interface UserColumn extends ColumnProps {
  field: keyof User;
}

export interface TableContext {
  fieldInEditMode: string | null;
  setFieldInEditMode: (name: string | null) => void;
}
