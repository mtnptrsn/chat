import React from 'react'
import { Box, styled } from '@material-ui/core'
import MessageBubble from './MessageBubble'
import { IMessage } from '../types'

interface IMessagesProps {
  messages: IMessage[]
}

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
}))

const Messages: React.SFC<IMessagesProps> = ({ messages }) => {
  const containerRef = React.useRef<any>(null)

  React.useEffect(() => {
    const containerElement = containerRef.current
    const containerHeight = containerElement.scrollHeight
    containerElement.scrollTo(0, containerHeight)
  }, [messages])

  return (
    <Container ref={containerRef}>
      {messages.map(({ message, isFromBot }, index) => {
        return (
          <Box
            key={index} // using index since we don't have a unique identifier for all messages
            ml={isFromBot ? 0 : 8}
            mr={isFromBot ? 8 : 0}
            mt={index === 0 ? 0 : 1}
            display="flex"
            flexDirection="column"
          >
            <MessageBubble message={message} isFromBot={isFromBot} />
          </Box>
        )
      })}
    </Container>
  )
}

export default Messages
