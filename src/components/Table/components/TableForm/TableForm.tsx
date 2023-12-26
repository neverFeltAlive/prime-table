import { Formik } from 'formik';
import { useTableContext } from 'hooks/useTableContext.ts';
import { FC } from 'react';
import { EditableFields, UserForm } from 'types';

import { TableFormProps } from './types.ts';
import { getValidationSchema } from './validationSchema.ts';

export const TableForm: FC<TableFormProps> = ({ children, innerRef }) => {
  const { fieldInEditMode } = useTableContext();
  return (
    <Formik<UserForm>
      innerRef={innerRef}
      initialValues={{}}
      onSubmit={(e) => console.log(e)}
      validationSchema={getValidationSchema(
        fieldInEditMode?.split('.')[1] as EditableFields
      )}
    >
      {children}
    </Formik>
  );
};
