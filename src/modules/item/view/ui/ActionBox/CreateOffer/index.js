import React, { useState, useContext, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Close } from 'styled-icons/material/Close'

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
    p {
      color: ${p => p.theme.primary};
      text-align: center;
      cursor: pointer;
    }
    svg {
      position: absolute;
      top: 8px;
      right: 8px;
      fill: ${p => p.theme.grey[5]};
      cursor: pointer;
    }
  }
`

const CreateOffer = ({ sellerId, history, match }) => {
  const modalRefForm = useRef(null)
  const modalRefSuccess = useRef(null)

  const { user } = useContext(AppContext)
  const [showForm, setShowForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  function onAsk() {
    setShowSuccess(false)
    if (user) {
      setShowForm(true)
    } else {
      history.push('/login')
    }
  }

  function onFinish() {
    setShowForm(false)
    setShowSuccess(true)
  }

  return (
    <>
      <Button variant='outline' text='Ask' onClick={onAsk} />
      <Modal modalRef={modalRefForm} show={showForm} onClose={() => setShowForm(false)}>
        <CreateOfferWrapper>
          <header>
            <h4>Ask a question</h4>
            <Close size={30} onClick={() => setShowForm(false)} />
          </header>
          <CreateOfferContainer>
            {({ submit }) => (
              <CreateOfferForm
                match={match}
                sellerId={sellerId}
                submit={submit}
                onFinish={onFinish}
              />
            )}
          </CreateOfferContainer>
        </CreateOfferWrapper>
      </Modal>
      <Modal modalRef={modalRefSuccess} show={showSuccess} onClose={() => setShowSuccess(false)}>
        <CreateOfferWrapper>
          <header>
            <h4>Message sent</h4>
            <p onClick={onAsk}>Write another message</p>
            <Close size={30} onClick={() => setShowSuccess(false)} />
          </header>
        </CreateOfferWrapper>
      </Modal>
    </>
  )
}

export default withRouter(CreateOffer)
