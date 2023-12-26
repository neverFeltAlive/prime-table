import { ReactNode } from 'react';
import { EditableFields, User } from 'types';

export interface FieldWrapperProps {
  children: ReactNode;
  fieldName: EditableFields;
  user: User;
}
