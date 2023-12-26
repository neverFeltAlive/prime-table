import { FC } from 'react';

import { IdFieldProps } from './types.ts';

export const IdField: FC<IdFieldProps> = ({ id }) => {
  return (
    <div className="whitespace-nowrap text-ellipsis overflow-hidden">{id}</div>
  );
};
