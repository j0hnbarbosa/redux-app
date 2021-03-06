import * as Yup from 'yup';

export const subscribeValidate = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),

  password: Yup.string()
    .required('Required'),

  groupRadio: Yup.string()
    .required('required'),

  birthday: Yup.string()
    .required('required'),

});
