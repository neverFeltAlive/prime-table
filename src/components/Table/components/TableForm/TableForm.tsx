import { Formik } from 'formik';
import { useTableContext } from 'hooks/useTableContext.ts';
import { FC } from 'react';
import { EditableFields, UserForm } from 'types';

import { TableFormProps } from './types.ts';
import { getValidationSchema } from './validationSchema.ts';

export const TableForm: FC<TableFormProps> = ({ children, innerRef }) => {
  const { fieldInEditMode, setFieldInEditMode, updateData } = useTableContext();

  const handleSubmit = (event: UserForm) => {
    const value = event[fieldInEditMode?.split('.')[1] as keyof UserForm];
    fieldInEditMode &&
      value &&
      updateData(fieldInEditMode, value).then(() => {
        setFieldInEditMode(null);
      });
  };

  return (
    <Formik<UserForm>
      innerRef={innerRef}
      initialValues={{}}
      onSubmit={handleSubmit}
      validationSchema={getValidationSchema(
        fieldInEditMode?.split('.')[1] as EditableFields
      )}
    >
      {children}
    </Formik>
  );
};
