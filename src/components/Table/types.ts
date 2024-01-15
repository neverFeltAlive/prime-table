import { FormikProps } from 'formik/dist/types';
import { ColumnProps } from 'primereact/column';
import { RefObject } from 'react';
import { UpdateUsersFunction, User, UserForm } from 'types';

export interface UserColumn extends ColumnProps {
  field: keyof User;
}

export interface TableContext {
  fieldInEditMode: string | null;
  formRef: RefObject<FormikProps<UserForm>> | null;
  setFieldInEditMode: (name: string | null) => void;
  updateData: UpdateUsersFunction;
}
