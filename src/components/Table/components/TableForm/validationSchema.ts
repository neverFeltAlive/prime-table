import { yup } from 'configs';
import { EditableFields } from 'types';

export const validationSchema = yup.object().shape({
  username: yup.string().required(),
  name: yup.string().required(),
  lastName: yup.string().required(),
  favouriteMusic: yup.string().required(),
  favouriteSong: yup.string().required(),
});

export const getValidationSchema = (fieldName: EditableFields) =>
  validationSchema.pick([fieldName]);
