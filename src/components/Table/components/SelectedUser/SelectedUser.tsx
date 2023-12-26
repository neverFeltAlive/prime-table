import { FC } from 'react';

import { SelectedUserProps } from './types.ts';

export const SelectedUser: FC<SelectedUserProps> = ({ user }) => {
  return (
    <div className="flex items-center w-full gap-2 p-1">
      <div>{user.name}</div>
      <img className="w-5 rounded-full" src={user.avatar} alt="user avatar" />
    </div>
  );
};
