import { FC } from 'react';

import { DateFieldProps } from './types.ts';

export const DateField: FC<DateFieldProps> = ({ date }) => {
  return <span>{date.toDateString()}</span>;
};
