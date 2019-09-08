import React, { useContext, useRef, useEffect } from 'react'

import { AppContext } from '../../../../../App'
import { formatCreatedAt } from '../../../../../utils/textHelpers'
import { MessagesListWrapper, Message, Avatar, Text } from './styles'

const Messages = ({ messages, subscribe }) => {
  const hidden = useRef()
  const unsubscribe = useRef()

  const { user } = useContext(AppContext)

  useEffect(() => {
    if (!unsubscribe.current) {
      unsubscribe.current = subscribe()
    }

    return () => {
      unsubscribe.current()
    }
  }, [])

  useEffect(() => {
    if (hidden.current) {
      hidden.current.scrollIntoView()
    }
  }, [messages])

  return (
    <MessagesListWrapper>
      {messages.map(message => {
        const align = message.user.id === user.id ? 'right' : 'left'
        return (
          <Message key={message.id} align={align}>
            <Avatar image={message.user.image} align={align} />
            <div className='time'>{formatCreatedAt(message.createdAt)}</div>
            <div className='text-row'>
              <Text align={align}>{message.text}</Text>
            </div>
          </Message>
        )
      })}
      <div ref={hidden} />
    </MessagesListWrapper>
  )
}

export default Messages
