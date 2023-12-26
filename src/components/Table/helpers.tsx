import { faker } from '@faker-js/faker';
import { ColumnFilterElementTemplateOptions } from 'primereact/column';
import { ReactElement } from 'react';
import { User } from 'types';

import { AvatarField, DateField, IdField, SelectFilter } from './components';
import { UserColumn } from './types.ts';

function generateRandomData(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    name: faker.person.firstName(),
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
    sortable: true,
    body: (user: User): ReactElement => <IdField id={user.userId} />,
  },
  {
    field: 'username',
    header: 'User Name',
    sortable: true,
  },
  {
    field: 'name',
    header: 'Name',
    sortable: true,
  },
  {
    field: 'lastName',
    header: 'Last Name',
    sortable: true,
  },
  {
    field: 'sex',
    header: 'Gender',
    sortable: true,
    filter: true,
    filterElement: (filterOptions: ColumnFilterElementTemplateOptions) => (
      <SelectFilter
        options={[
          { name: 'Male', value: 'male' },
          { name: 'Female', value: 'female' },
        ]}
        {...filterOptions}
      />
    ),
  },
  {
    field: 'favouriteMusic',
    header: 'Favourite Music Genre',
    sortable: true,
  },
  {
    field: 'favouriteSong',
    header: 'Favourite Song',
    sortable: true,
  },
  {
    field: 'email',
    header: 'Email',
    sortable: true,
  },
  {
    field: 'avatar',
    header: 'Avatar',
    sortable: true,
    body: (user: User): ReactElement => <AvatarField src={user.avatar} />,
  },
  {
    field: 'birthdate',
    header: 'Birth Date',
    sortable: true,
    body: (user: User): ReactElement => <DateField date={user.birthdate} />,
    filter: true,
  },
  {
    field: 'registeredAt',
    header: 'Registered At',
    sortable: true,
    body: (user: User): ReactElement => <DateField date={user.registeredAt} />,
    filter: true,
  },
];
