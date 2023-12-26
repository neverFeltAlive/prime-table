import { faker } from '@faker-js/faker';
import { ReactElement } from 'react';

import { AvatarField, DateField } from './components';
import { User, UserColumn } from './types.ts';

function generateRandomData(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    name: faker.person.fullName(),
    lastName: faker.person.lastName(),
    favouriteMusic: faker.music.genre(),
    favouriteSong: faker.music.songName(),
    sex: faker.person.sex(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const GENERATED_DATA = faker.helpers.multiple(generateRandomData, {
  count: 100,
});

export const COLUMNS: UserColumn[] = [
  {
    field: 'userId',
    header: 'ID',
  },
  {
    field: 'username',
    header: 'User Name',
  },
  {
    field: 'name',
    header: 'Name',
  },
  {
    field: 'lastName',
    header: 'Last Name',
  },
  {
    field: 'sex',
    header: 'Gender',
  },
  {
    field: 'favouriteMusic',
    header: 'Favourite Music Genre',
  },
  {
    field: 'favouriteSong',
    header: 'Favourite Song',
  },
  {
    field: 'email',
    header: 'Email',
  },
  {
    field: 'avatar',
    header: 'Avatar',
    body: (user: User): ReactElement => <AvatarField src={user.avatar} />,
  },
  {
    field: 'birthdate',
    header: 'Birth Date',
    body: (user: User): ReactElement => <DateField date={user.birthdate} />,
  },
  {
    field: 'registeredAt',
    header: 'Registered At',
    body: (user: User): ReactElement => <DateField date={user.registeredAt} />,
  },
];
