import React from 'react'
import { Typography, Box } from '@material-ui/core'
import theme from '../styles/theme'

interface IMessageBubbleProps {
  message: string
  isOwn: boolean
}

const MessageBubble: React.SFC<IMessageBubbleProps> = ({ message, isOwn }) => (
  <Box
    padding={1}
    paddingLeft={2}
    paddingRight={2}
    bgcolor={isOwn ? theme.palette.primary.main : theme.palette.grey[200]}
    borderRadius={12}
    color={isOwn ? 'white' : theme.palette.text.primary}
    alignSelf={isOwn ? 'flex-end' : 'flex-start'}
  >
    <Typography>{message}</Typography>
  </Box>
)

export default MessageBubble
