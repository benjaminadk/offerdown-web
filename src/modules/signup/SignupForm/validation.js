import * as yup from 'yup'

const emailNotLongEnough = 'email must be at least 3 characters'
const emailRequired = 'Please enter an email address'
const invalidEmail = 'email must be a valid email'
const nameNotLongEnough = 'name must be at least 3 characters'
const passwordNotLongEnough = 'password must be at least 3 characters'
const fieldRequired = 'This field is required'

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(100)
    .email(invalidEmail)
    .required(emailRequired),
  name: yup
    .string()
    .min(3, nameNotLongEnough)
    .max(100)
    .required(fieldRequired),
  password: yup
    .string()
    .min(8, passwordNotLongEnough)
    .max(100)
    .required(fieldRequired)
})
