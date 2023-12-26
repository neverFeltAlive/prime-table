import { useTableContext } from 'hooks/useTableContext.ts';
import { InputText } from 'primereact/inputtext';
import { FC, useState } from 'react';

import { FieldWrapperProps } from './types.ts';

export const FieldWrapper: FC<FieldWrapperProps> = ({
  fieldName,
  children,
  user,
}) => {
  const { fieldInEditMode, setFieldInEditMode } = useTableContext();
  const [inputValue, setInputValue] = useState(user[fieldName]);

  const cellId = `${user.userId}.${fieldName}`;

  const handleDoubleClick = () => {
    if (!fieldInEditMode) {
      setFieldInEditMode(cellId);
    }
  };

  return cellId === fieldInEditMode ? (
    <span className="p-input-icon-right">
      <i className="pi pi-cog" />
      <InputText
        className="px-2 py-1 bg-transparent"
        value={inputValue}
        autoFocus={true}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </span>
  ) : (
    <div onDoubleClick={handleDoubleClick}>{children}</div>
  );
};
