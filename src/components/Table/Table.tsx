import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import {
  COLUMNS as usersColumns,
  GENERATED_DATA as usersData,
} from './helpers';

export const Table = () => {
  console.log(usersColumns);
  return (
    <DataTable
      value={usersData}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      sortMode="multiple"
      removableSort
    >
      {usersColumns.map((column) => (
        <Column key={column.field} {...column} />
      ))}
    </DataTable>
  );
};
