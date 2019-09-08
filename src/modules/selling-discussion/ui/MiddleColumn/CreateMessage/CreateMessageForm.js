import React from 'react'
import { withFormik } from 'formik'
import styled from 'styled-components'

export const Form = styled.form`
  height: 68px;
  display: grid;
  grid-template-columns: 1fr 90px;
  align-items: center;
  border-right: ${p => p.theme.borderLight};
  textarea {
    border: 0;
    padding: 10px 0 10px 16px;
    resize: none;
    &::placeholder {
      color: ${p => p.theme.placeholder};
    }
  }
  button {
    justify-self: center;
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.white};
    border: 0;
    border-radius: 3px;
    font-weight: 700;
    line-height: 26px;
    padding: 4px 12px;
    cursor: pointer;
    &:disabled {
      background-color: ${p => p.theme.grey[2]};
      color: ${p => p.theme.black};
      cursor: not-allowed;
      &:hover {
        background-color: ${p => p.theme.grey[3]};
      }
    }
    &:hover {
      background-color: ${p => p.theme.hoverPrimaryDark};
    }
  }
`

const InnerForm = props => {
  const { values, isSubmitting, handleChange, handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <textarea name='text' value={values.text} placeholder='Message...' onChange={handleChange} />
      <button type='submit' disabled={!values.text || isSubmitting}>
        Send
      </button>
    </Form>
  )
}

const CreateMessageForm = withFormik({
  mapPropsToValues: () => ({ text: '' }),

  handleSubmit: async (values, { props: { submit }, resetForm, setSubmitting }) => {
    const res = await submit(values.text)
    if (res) {
      resetForm()
    }
    setSubmitting(false)
  },

  displayName: 'CreateMessageForm'
})(InnerForm)

export default CreateMessageForm
