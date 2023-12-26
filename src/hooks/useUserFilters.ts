import { FilterMatchMode } from 'primereact/api';
import { useState } from 'react';
import { FiltersState, UpdateFilters } from 'types';

export function useUserFilters() {
  const [filters, setFilters] = useState<FiltersState>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    sex: { value: null, matchMode: FilterMatchMode.EQUALS },
    birthdate: { value: null, matchMode: FilterMatchMode.DATE_BEFORE },
    registeredAt: { value: null, matchMode: FilterMatchMode.DATE_AFTER },
  });

  const updateFilters: UpdateFilters =
    <FilterName extends keyof FiltersState>(filterName: FilterName) =>
    <Value extends FiltersState[FilterName]['value']>(value: Value) => {
      setFilters((prevState) => ({
        ...prevState,
        [filterName]: { ...prevState[filterName], value: value },
      }));
    };

  return [filters, updateFilters] as [FiltersState, typeof updateFilters];
}
