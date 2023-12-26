import { Calendar } from 'primereact/calendar';
import { FormEvent } from 'primereact/ts-helpers';
import { FC, SyntheticEvent } from 'react';

import { DateFilterProps } from './types.ts';

export const DateFilter: FC<DateFilterProps> = ({
  value,
  filterApplyCallback,
}) => {
  const handleChange = (
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) => {
    filterApplyCallback(event.value);
  };

  return <Calendar value={value} onChange={handleChange} />;
};
