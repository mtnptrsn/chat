import React from 'react'
import { Typography, Box } from '@material-ui/core'
import theme from '../styles/theme'

interface IMessageBubbleProps {
  message: string
  isFromBot: boolean
}

const MessageBubble: React.SFC<IMessageBubbleProps> = ({
  message,
  isFromBot,
}) => (
  <Box
    padding={1}
    paddingLeft={2}
    paddingRight={2}
    bgcolor={isFromBot ? theme.palette.grey[200] : theme.palette.primary.main}
    borderRadius={12}
    color={isFromBot ? theme.palette.text.primary : 'white'}
    alignSelf={isFromBot ? 'flex-start' : 'flex-end'}
  >
    <Typography>{message}</Typography>
  </Box>
)

export default MessageBubble
