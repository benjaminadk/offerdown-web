import React from 'react'

import CreateMessageContainer from './CreateMessageContainer'
import CreateMessageForm from './CreateMessageForm'

const CreateMessage = () => {
  return (
    <CreateMessageContainer>
      {({ submit }) => <CreateMessageForm submit={submit} />}
    </CreateMessageContainer>
  )
}

export default CreateMessage
