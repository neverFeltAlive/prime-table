import { FC } from 'react';

import { AvatarFieldProps } from './types.ts';

export const AvatarField: FC<AvatarFieldProps> = ({ src }) => {
  return (
    <div className="flex items-center w-full justify-center">
      <img className="rounded-full w-12" src={src} alt="user avatar" />
    </div>
  );
};
