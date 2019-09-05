import React from 'react'
import styled from 'styled-components'

import { usePosition } from '../../../utils/usePosition'

export const ModalWrapper = styled.div.attrs(p => ({
  style: {
    top: p.position[1] + 'px',
    left: p.position[0] + 'px',
    display: p.show ? 'block' : 'none'
  }
}))`
  position: fixed;
  z-index: 7;
  max-width: 100%;
  height: auto;
`

export const Backdrop = styled.div.attrs(p => ({
  style: {
    display: p.show ? 'block' : 'none'
  }
}))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  background-color: rgba(255, 255, 255, 0.85);
`

const Modal = ({ modalRef, show, children, onClose }) => {
  const position = usePosition(modalRef.current, show)

  return (
    <>
      <ModalWrapper ref={modalRef} show={show} position={position}>
        {children}
      </ModalWrapper>
      <Backdrop show={show} onClick={onClose} />
    </>
  )
}

export default Modal
