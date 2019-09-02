import React from 'react'
import { withFormik } from 'formik'

import { normalizeErrors, formatError } from '../../../utils/errorHelpers'
import { validUserSchema } from './validation'
import { Form, Field, Button } from './styles'
import Svg from '../../shared/Svg'

const fields = ['email', 'name', 'password']

const InnerForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    isValidating,
    handleChange,
    handleBlur,
    handleSubmit
  } = props

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
      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting && !isValidating ? <Svg name='logo' /> : 'Sign up'}
      </Button>
    </Form>
  )
}

const SignupForm = withFormik({
  mapPropsToValues: () => ({ email: '', name: '', password: '' }),

  validationSchema: validUserSchema,

  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const errors = await props.submit(values)
    if (errors) {
      setErrors(normalizeErrors(errors))
    } else {
      props.onFinish()
    }
    setSubmitting(false)
  },

  displayName: 'SignupForm'
})(InnerForm)

export default SignupForm
