import { ReactNode } from 'react';
import { UpdateUsersFunction } from 'types';

export interface TableProviderProps {
  children: ReactNode;
  updateData: UpdateUsersFunction;
}
