import React, { useState, useContext, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import CreateOfferContainer from './CreateOfferContainer'
import { AppContext } from '../../../../../../App'
import Modal from '../../../../../shared/Modal'
import Button from '../../../../../shared/Button'
import CreateOfferForm from './CreateOfferForm'

export const CreateOfferWrapper = styled.div`
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

const CreateOffer = ({ history, match }) => {
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
        <CreateOfferWrapper>
          <header>
            <h4>Ask a question</h4>
          </header>
          <CreateOfferContainer>
            {({ submit, onFinish }) => (
              <CreateOfferForm submit={submit} onFinish={onFinish} match={match} />
            )}
          </CreateOfferContainer>
        </CreateOfferWrapper>
      </Modal>
    </>
  )
}

export default withRouter(CreateOffer)
