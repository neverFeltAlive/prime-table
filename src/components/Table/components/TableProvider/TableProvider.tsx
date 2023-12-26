import { TableContext } from 'components';
import { FormikProps } from 'formik/dist/types';
import { FC, useRef, useState } from 'react';
import { UserForm } from 'types';

import { TableForm } from '../TableForm';
import { TableProviderProps } from './types.ts';

export const TableProvider: FC<TableProviderProps> = ({
  children,
  updateData,
}) => {
  const [fieldInEditMode, setFieldInEditMode] = useState<string | null>(null);
  const formRef = useRef<FormikProps<UserForm>>(null);

  return (
    <TableContext.Provider
      value={{ formRef, fieldInEditMode, setFieldInEditMode, updateData }}
    >
      <TableForm innerRef={formRef}>{children}</TableForm>
    </TableContext.Provider>
  );
};
