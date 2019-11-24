import React from 'react'
import { Box } from '@material-ui/core'
import MessageBubble from './MessageBubble'
import { IMessage } from '../types'

interface IMessagesProps {
  messages: IMessage[]
}

const Messages: React.SFC<IMessagesProps> = ({ messages }) => (
  <Box
    paddingLeft={1}
    paddingRight={1}
    paddingTop={1}
    flex={1}
    display="flex"
    flexDirection="column"
    overflow="scroll"
  >
    {messages.map(({ message }, index) => {
      const isOwn = index % 2 === 0

      return (
        <Box
          ml={isOwn ? 8 : 0}
          mr={isOwn ? 0 : 8}
          mt={index === 0 ? 0 : 1}
          display="flex"
          flexDirection="column"
        >
          <MessageBubble message={message} isOwn={isOwn} />
        </Box>
      )
    })}
  </Box>
)

export default Messages
