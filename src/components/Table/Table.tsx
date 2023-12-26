import { useUserFilters } from 'hooks/useUserFilters.ts';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent, createContext } from 'react';

import { TableProvider } from './components';
import {
  GENERATED_DATA as usersData,
  renderedColumns as usersColumns,
} from './helpers';
import { TableContext as TableContextType } from './types.ts';

export const TableContext = createContext<TableContextType>({
  fieldInEditMode: null,
  setFieldInEditMode: () => {},
});

export const Table = () => {
  const [filters, updateFilters] = useUserFilters();

  const globalFilterValue = filters.global.value || undefined;

  const onGlobalFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateFilters('global')(event.target.value);
  };

  const header = (
    <div className="flex justify-end p-2">
      <div className="flex justify-center gap-2 items-center">
        <i className="pi pi-search" />
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Keyword Search"
        />
      </div>
    </div>
  );

  return (
    <TableProvider>
      <DataTable
        header={header}
        value={usersData}
        filters={filters}
        globalFilterFields={['name', 'userName']}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        sortMode="multiple"
        removableSort
        size="small"
        showGridlines
        stripedRows
        filterDisplay="menu"
        emptyMessage="No users found"
        resizableColumns
        reorderableColumns
      >
        {usersColumns.map((column) => (
          <Column className="max-w-2" key={column.field} {...column} />
        ))}
      </DataTable>
    </TableProvider>
  );
};
