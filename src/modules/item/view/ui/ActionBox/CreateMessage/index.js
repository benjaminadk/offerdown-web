import React, { useState, useContext, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import CreateMessageContainer from './CreateMessageContainer'
import { AppContext } from '../../../../../../App'
import Modal from '../../../../../shared/Modal'
import Button from '../../../../../shared/Button'
import CreateMessageForm from './CreateMessageForm'

export const CreateMessageWrapper = styled.div`
  min-width: 350px;
  background-color: ${p => p.theme.white};
  border-radius: 5px;
  box-shadow: ${p => p.theme.modalShadow};
  header {
    position: relative;
    padding: 28px;
    h4 {
      font-size: 22px;
      font-weight: 900;
      line-height: 30px;
      text-align: center;
    }
  }
`

const CreateMessage = ({ history, match }) => {
  const modalRef = useRef(null)
  const { user } = useContext(AppContext)
  const [show, setShow] = useState(false)

  function onAsk() {
    if (user) {
      setShow(true)
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <Button variant='outline' text='Ask' onClick={onAsk} />
      <Modal modalRef={modalRef} show={show} onClose={() => setShow(false)}>
        <CreateMessageWrapper>
          <header>
            <h4>Ask a question</h4>
          </header>
          <CreateMessageContainer>
            {({ submit, onFinish }) => (
              <CreateMessageForm submit={submit} onFinish={onFinish} match={match} />
            )}
          </CreateMessageContainer>
        </CreateMessageWrapper>
      </Modal>
    </>
  )
}

export default withRouter(CreateMessage)
