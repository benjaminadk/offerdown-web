import React from 'react'
import { withFormik } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'

import Button from '../../../../../shared/Button'
import { normalizeErrors, formatError } from '../../../../../../utils/errorHelpers'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: ${p => (p.error ? p.theme.error : p.theme.black)};
  padding: 20px;
  padding-top: 0;
  textarea {
    color: currentColor;
    border: 1px solid ${p => (p.error ? 'currentColor' : p.theme.grey[4])};
    border-radius: 3px;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 8px;
    resize: none;
    &::placeholder {
      color: ${p => p.theme.grey[5]};
    }
  }
  .error {
    display: ${p => (p.error ? 'block' : 'none')};
    color: currentColor;
    font-size: 14px;
  }
`

const InnerForm = props => {
  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props
  let error = Boolean(errors.text && touched.text)

  return (
    <Form error={error} onSubmit={handleSubmit}>
      <textarea
        type='text'
        value={values.text}
        name='text'
        placeholder='Message'
        rows={10}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div id='error'>{formatError(errors.text)}</div>
      <Button type='submit' variant='solid' text='Send' disabled={isSubmitting} />
    </Form>
  )
}

const textRequired = 'Message is a required field'
const textMax = 'Message cannot be longer than 500 characters'

const textSchema = yup.object().shape({
  text: yup
    .string()
    .max(500, textMax)
    .required(textRequired)
})

const CreateOfferForm = withFormik({
  mapPropsToValues: () => ({ text: '' }),

  validationSchema: textSchema,

  handleSubmit: async (
    values,
    { props: { match, submit, onFinish }, setErrors, setSubmitting, resetForm }
  ) => {
    const errors = await submit({ text: values.text, itemId: match.params.itemId })
    setSubmitting(false)

    if (errors) {
      setErrors(normalizeErrors(errors))
    } else {
      resetForm()
      onFinish()
    }
  },

  displayName: 'CreateOfferForm'
})(InnerForm)

export default CreateOfferForm
