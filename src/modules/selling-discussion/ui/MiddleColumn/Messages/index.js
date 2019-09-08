import React from 'react'

import MessagesContainer from './MessagesContainer'
import MessagesList from './MessagesList'

const Messages = () => {
  return (
    <MessagesContainer>
      {({ loading, data, subscribe }) => {
        if (loading) {
          return null
        }
        return <MessagesList messages={data.findMessages} subscribe={subscribe} />
      }}
    </MessagesContainer>
  )
}

export default Messages
