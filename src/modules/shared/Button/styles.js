import { lighten, darken } from 'polished'
import styled from 'styled-components'

export const ButtonBase = styled.button`
  width: 100%;
  border: 0;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  padding: 8px 20px;
  margin-top: 12px;
  cursor: pointer;
`

export const ButtonSolid = styled(ButtonBase)`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.white};
  &:hover {
    background-color: ${p => `${darken(0.05, p.theme.primary)}`};
  }
`

export const ButtonOutline = styled(ButtonBase)`
  background-color: ${p => p.theme.white};
  color: ${p => p.theme.primary};
  border: 1px solid currentColor;
  &:hover {
    background-color: ${p => `${lighten(0.6, p.theme.primary)}`};
  }
`
