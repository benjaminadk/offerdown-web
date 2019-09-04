import React from 'react'
import { withFormik } from 'formik'
import styled from 'styled-components'

import Button from '../../../../../shared/Button'

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

const errorMessage = 'Required field is not filled in or contains invalid characters.'

const InnerForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props
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
      <div id='error'>{errors.text}</div>
      <Button type='submit' variant='solid' text='Send' />
    </Form>
  )
}

const CreateMessageForm = withFormik({
  mapPropsToValues: () => ({ text: '' }),

  handleSubmit: async (values, { props: { match, submit, onFinish }, setSubmitting }) => {
    const message = { text: values.text, itemId: match.params.itemId }
    const res = await submit(message)
    console.log(res)
    onFinish()
  },

  displayName: 'CreateMessageForm'
})(InnerForm)

export default CreateMessageForm
