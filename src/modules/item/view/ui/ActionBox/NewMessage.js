import React, { useState, useRef, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../../../../../App'
import { usePosition } from '../../../../../utils/usePosition'
import Modal from '../../../../shared/Modal'
import Button from '../../../../shared/Button'

export const NewMessageWrapper = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${p => p.theme.white};
  border-radius: 5px;
`

const NewMessage = ({ history }) => {
  const modalRef = useRef(null)
  const { user } = useContext(AppContext)
  const [show, setShow] = useState(false)
  const position = usePosition(modalRef.current)

  function onAsk() {
    if (user) {
      setShow(true)
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <Button type='outline' text='Ask' onClick={onAsk} />
      <Modal modalRef={modalRef} show={show} position={position} onClose={() => setShow(false)}>
        <NewMessageWrapper></NewMessageWrapper>
      </Modal>
    </>
  )
}

export default withRouter(NewMessage)
