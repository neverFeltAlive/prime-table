import { useUserFilters } from 'hooks/useUserFilters.ts';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import {
  COLUMNS as usersColumns,
  GENERATED_DATA as usersData,
} from './helpers';

export const Table = () => {
  const [filters] = useUserFilters();

  return (
    <DataTable
      value={usersData}
      filters={filters}
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
    >
      {usersColumns.map((column) => (
        <Column key={column.field} {...column} />
      ))}
    </DataTable>
  );
};
