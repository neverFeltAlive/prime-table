import { FormikConfig } from 'formik/dist/types';
import { ReactNode } from 'react';
import { UserForm } from 'types';

export type TableFormProps = {
  children: ReactNode;
} & Pick<FormikConfig<UserForm>, 'innerRef'>;
