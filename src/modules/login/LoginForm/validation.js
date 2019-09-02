import * as yup from 'yup'

const invalidLogin = 'invalid login'
const fieldRequired = 'This field is required'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, invalidLogin)
    .max(100, invalidLogin)
    .email(invalidLogin)
    .required(fieldRequired),
  password: yup
    .string()
    .min(3, invalidLogin)
    .max(100, invalidLogin)
    .required(fieldRequired)
})
