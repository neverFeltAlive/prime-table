import { FC } from 'react';

import { AvatarFieldProps } from './types.ts';

export const AvatarField: FC<AvatarFieldProps> = ({ src }) => {
  return <img src={src} alt="user avatar" />;
};
