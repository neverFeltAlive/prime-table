import { faker } from '@faker-js/faker';
import { ColumnFilterElementTemplateOptions } from 'primereact/column';
import {
  DateFields,
  dateFields,
  EditableFields,
  editableFields,
  User,
} from 'types';

import {
  AvatarField,
  DateField,
  FieldWrapper,
  IdField,
  SelectFilter,
} from './components';
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

const getFieldRenderer = (fieldName: keyof User) => {
  const fieldRenderers = {
    userId: (user: User) => <IdField id={user.userId} />,
    avatar: (user: User) => <AvatarField src={user.avatar} />,
    date: (user: User) => <DateField date={user[fieldName as DateFields]} />,
    editable: (user: User) => (
      <FieldWrapper user={user} fieldName={fieldName as EditableFields}>
        {user[fieldName as keyof Omit<User, DateFields>]}
      </FieldWrapper>
    ),
    default: (user: User) => user[fieldName],
  };

  const fieldKey = editableFields.includes(fieldName as EditableFields)
    ? 'editable'
    : dateFields.includes(fieldName as DateFields)
      ? 'date'
      : fieldName;
  return fieldRenderers[fieldKey] || fieldRenderers['default'];
};

export const COLUMNS: UserColumn[] = [
  {
    field: 'userId',
    header: 'ID',
    sortable: true,
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
  },
  {
    field: 'birthdate',
    header: 'Birth Date',
    sortable: true,
    filter: true,
  },
  {
    field: 'registeredAt',
    header: 'Registered At',
    sortable: true,
    filter: true,
  },
];

export const renderedColumns = COLUMNS.map((column: UserColumn) => ({
  ...column,
  body: getFieldRenderer(column.field),
}));
