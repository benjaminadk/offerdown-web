import styled, { keyframes } from 'styled-components'
import { darken, lighten } from 'polished'

export const Form = styled.form`
  width: 300px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  color: ${p => (p.error ? p.theme.error : p.theme.black)};
  label {
    color: currentColor;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  input {
    color: currentColor;
    border: 1px solid ${p => (p.error ? 'currentColor' : p.theme.grey[4])};
    border-radius: 3px;
    font-size: 16px;
    padding: 12px 16px;
    margin-bottom: 8px;
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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.white};
  border: 0;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  padding: 8px 20px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${p => `${darken(0.1, p.theme.primary)}`};
  }
  &:disabled {
    background-color: ${p => `${lighten(0.1, p.theme.primary)}`};
  }
  svg {
    justify-self: center;
    width: 25px;
    height: 25px;
    animation: ${spin} 1s linear infinite;
  }
`
