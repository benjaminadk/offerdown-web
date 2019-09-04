import React from 'react'
import PropTypes from 'prop-types'

import { ButtonSolid, ButtonOutline } from './styles'

const Button = ({ type = 'solid', text = 'Button', onClick }) => {
  if (type === 'solid') {
    return <ButtonSolid onClick={onClick}>{text}</ButtonSolid>
  }
  if (type === 'outline') {
    return <ButtonOutline onClick={onClick}>{text}</ButtonOutline>
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
