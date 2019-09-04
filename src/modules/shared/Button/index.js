import React from 'react'
import PropTypes from 'prop-types'

import { ButtonSolid, ButtonOutline } from './styles'

const Button = ({ variant = 'solid', text = 'Button', onClick, ...rest }) => {
  if (variant === 'solid') {
    return (
      <ButtonSolid {...rest} onClick={onClick}>
        {text}
      </ButtonSolid>
    )
  }
  if (variant === 'outline') {
    return (
      <ButtonOutline {...rest} onClick={onClick}>
        {text}
      </ButtonOutline>
    )
  }
}

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
