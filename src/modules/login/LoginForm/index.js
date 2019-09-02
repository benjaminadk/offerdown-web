import React from 'react'
import { withFormik } from 'formik'

import { normalizeErrors, formatError } from '../../../utils/errorHelpers'
import { loginSchema } from './validation'
import { Form, Field, Button } from '../../signup/SignupForm/styles'

const fields = ['email', 'password']

const InnerForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map(field => {
        let error = Boolean(errors[field] && touched[field])
        return (
          <Field key={field} error={error}>
            <label>{field}</label>
            <input
              type={field}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field]}
              name={field}
              placeholder={field === 'email' ? 'Ex. johndoe@mail.com' : ''}
              spellCheck={false}
            />
            <div className='error'>{formatError(errors[field])}</div>
          </Field>
        )
      })}
      <Button type='submit'>Log in</Button>
    </Form>
  )
}

const LoginForm = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  validationSchema: loginSchema,

  validateOnBlur: false,

  validateOnChange: false,

  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(normalizeErrors(errors))
    } else {
      props.onFinish()
    }
    setSubmitting(false)
  },

  displayName: 'LoginForm'
})(InnerForm)

export default LoginForm
