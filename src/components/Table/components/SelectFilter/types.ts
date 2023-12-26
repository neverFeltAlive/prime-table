import { ColumnFilterElementTemplateOptions } from 'primereact/column';
import { SelectButtonProps } from 'primereact/selectbutton';

export interface SelectFilterProps extends ColumnFilterElementTemplateOptions {
  options: SelectButtonProps['options'];
}
