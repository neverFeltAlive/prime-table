import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { FC } from 'react';

import { SelectFilterProps } from './types.ts';

export const SelectFilter: FC<SelectFilterProps> = ({
  options,
  value,
  filterApplyCallback,
}) => {
  const handleChange = (event: SelectButtonChangeEvent) => {
    filterApplyCallback(event.value);
  };

  return (
    <SelectButton
      value={value}
      optionLabel="name"
      onChange={handleChange}
      options={options}
    />
  );
};
