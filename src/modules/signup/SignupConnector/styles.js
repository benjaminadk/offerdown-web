import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SignupConnectorWrapper = styled.div`
  header {
    h3 {
      font-size: 30px;
      font-weight: 900;
      text-align: center;
    }
  }
  main {
    display: grid;
    align-items: center;
    justify-items: center;
  }
  hr {
    width: 300px;
    color: ${p => p.theme.grey[2]};
    border: 0;
    border-top: 1px solid currentColor;
  }
  .forgot {
    text-align: center;
    margin: 20px auto;
  }
  .switch {
    font-size: 18px;
    text-align: center;
    margin: 20px auto;
  }
  .message {
    width: 300px;
    color: ${p => p.theme.grey[6]};
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
  }
`

export const NavLink = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;
`
