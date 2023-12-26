import { FC } from 'react';

import { IdFieldProps } from './types.ts';

export const IdField: FC<IdFieldProps> = ({ id }) => {
  return <span className="whitespace-nowrap text-ellipsis">{id}</span>;
};
