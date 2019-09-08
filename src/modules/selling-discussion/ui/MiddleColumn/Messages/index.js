import React from 'react'

import MessagesContainer from './MessagesContainer'
import MessagesList from './MessagesList'

const Messages = () => {
  return (
    <MessagesContainer>
      {({ loading, data }) => {
        if (loading) {
          return null
        }
        return <MessagesList messages={data.findMessages} />
      }}
    </MessagesContainer>
  )
}

export default Messages
