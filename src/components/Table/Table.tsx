import { useTableData } from 'hooks/useTableData.ts';
import { useUserFilters } from 'hooks/useUserFilters.ts';
import { Column } from 'primereact/column';
import {
  DataTable,
  DataTableSelectionSingleChangeEvent,
} from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent, createContext, useState } from 'react';
import { User } from 'types';

import { SelectedUser, TableProvider } from './components';
import { renderedColumns as usersColumns } from './helpers';
import { TableContext as TableContextType } from './types.ts';

export const TableContext = createContext<TableContextType>({
  fieldInEditMode: null,
  formRef: null,
  setFieldInEditMode: () => {},
  updateData: () => new Promise(() => {}),
});

export const Table = () => {
  const [filters, updateGlobalFilter] = useUserFilters();
  const [usersData, updateData] = useTableData();
  const [selected, setSelected] = useState<User | null>(null);

  const globalFilterValue = filters.global.value || undefined;

  const onGlobalFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateGlobalFilter('global')(event.target.value);
  };

  const handleSelectionChange = (
    event: DataTableSelectionSingleChangeEvent<User[]>
  ) => {
    setSelected(event.value);
  };

  const header = (
    <div className="flex justify-between p-2">
      <div className="flex w-1/2">
        {selected && <SelectedUser user={selected} />}
      </div>
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
    <TableProvider updateData={updateData}>
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
        selectionMode="single"
        onSelectionChange={handleSelectionChange}
      >
        {usersColumns.map((column) => (
          <Column className="max-w-2" key={column.field} {...column} />
        ))}
      </DataTable>
    </TableProvider>
  );
};
