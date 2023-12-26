import { useField } from 'formik';
import { useTableContext } from 'hooks/useTableContext.ts';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent, FC, KeyboardEvent } from 'react';

import { FieldWrapperProps } from './types.ts';

export const FieldWrapper: FC<FieldWrapperProps> = ({
  fieldName,
  children,
  user,
}) => {
  const { fieldInEditMode, setFieldInEditMode, formRef } = useTableContext();
  const [{ value }, { error }, { setValue }] = useField(fieldName);

  const cellId = `${user.userId}.${fieldName}`;

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setFieldInEditMode(null);
    }

    if (event.key === 'Enter') {
      formRef?.current?.submitForm();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleDoubleClick = () => {
    if (!fieldInEditMode) {
      setValue(user[fieldName]);
      setFieldInEditMode(cellId);
    }
  };

  return cellId === fieldInEditMode ? (
    <div className="flex flex-col gap-0.5 px-1 relative">
      <span className="p-input-icon-right">
        <i className="pi pi-cog" />
        <InputText
          id={fieldName}
          value={value}
          className={`p-1 bg-transparent ${error ? 'p-invalid' : ''}`}
          autoFocus={true}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
        />
      </span>
      {!!error && (
        <small className="absolute bottom-0 translate-y-full">{error}</small>
      )}
    </div>
  ) : (
    <div onDoubleClick={handleDoubleClick}>{children}</div>
  );
};
