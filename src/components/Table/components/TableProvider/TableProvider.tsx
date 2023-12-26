import { TableContext } from 'components';
import { FC, useState } from 'react';

import { TableProviderProps } from './types.ts';

export const TableProvider: FC<TableProviderProps> = ({ children }) => {
  const [fieldInEditMode, setFieldInEditMode] = useState<string | null>(null);

  return (
    <TableContext.Provider value={{ fieldInEditMode, setFieldInEditMode }}>
      {children}
    </TableContext.Provider>
  );
};
