import { FC } from 'react';

import { AvatarFieldProps } from './types.ts';

export const AvatarField: FC<AvatarFieldProps> = ({ src }) => {
  return <img className="rounded-full w-40" src={src} alt="user avatar" />;
};
