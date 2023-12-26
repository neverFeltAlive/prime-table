import { ColumnProps } from 'primereact/column';

export interface User {
  userId: string;
  username: string;
  name: string;
  lastName: string;
  favouriteMusic: string;
  favouriteSong: string;
  sex: string;
  email: string;
  avatar: string;
  birthdate: Date;
  registeredAt: Date;
}

export interface UserColumn extends ColumnProps {
  field: keyof User;
}
