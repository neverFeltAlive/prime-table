import { FilterMatchMode } from 'primereact/api';
import { useState } from 'react';
import { FilterableUser, FiltersStateType, UpdateFilters } from 'types';

export function useUserFilters() {
  const [filters, setFilters] = useState<FiltersStateType>({
    sex: { value: null, matchMode: FilterMatchMode.EQUALS },
    birthdate: { value: null, matchMode: FilterMatchMode.DATE_BEFORE },
    registeredAt: { value: null, matchMode: FilterMatchMode.DATE_AFTER },
  });

  const updateFilters: UpdateFilters =
    <FilterName extends keyof FiltersStateType>(filterName: FilterName) =>
    <Value extends FilterableUser[FilterName]>(value: Value) => {
      setFilters((prevState) => ({
        ...prevState,
        [filterName]: { ...prevState[filterName], value: value },
      }));
    };

  return [filters, updateFilters] as [FiltersStateType, typeof updateFilters];
}
