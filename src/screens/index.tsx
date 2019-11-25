import React from 'react'

import InputBar from '../components/InputBar'
import Messages from '../components/Messages'

import { Box, colors, useTheme } from '@material-ui/core'
import { createGlobalStyle } from 'styled-components'

import { sendMessage } from '../api/socket'
import { useSelector } from 'react-redux'
import EmptyMessages from '../components/EmptyMessages'
import Progress from '../components/Progress'
import useWindowSize from '../hooks/useWindowSize'
import { IReduxState, IMessageState } from '../store/types'

const GlobalStyles = createGlobalStyle({
  body: {
    margin: 0,
    overflow: 'hidden',
    backgroundColor: colors.grey[100],
  },
  '*': {
    boxSizing: 'border-box',
  },
})

const IndexScreen: React.FC = () => {
  const maxWidth = 800
  const { width } = useWindowSize()
  const hasReachedMaxWidth = width >= maxWidth
  const borderWidth = hasReachedMaxWidth ? '2px' : '0px'

  const theme = useTheme()
  const messages = useSelector<IReduxState, IMessageState>(
    state => state.messages,
  )
  const isLoading = useSelector<IReduxState, boolean>(
    state => state.status.isLoading,
  )

  if (isLoading) return <Progress />

  return (
    <>
      <GlobalStyles />
      <Box
        borderRight={`${borderWidth} solid ${theme.palette.grey[200]}`}
        borderLeft={`${borderWidth} solid ${theme.palette.grey[200]}`}
        bgcolor="white"
        display="flex"
        flexDirection="column"
        height="100vh"
        width="100%"
        maxWidth={maxWidth}
        marginLeft="auto"
        marginRight="auto"
      >
        {messages.length ? <Messages messages={messages} /> : <EmptyMessages />}
        <InputBar onSendMessage={sendMessage} />
      </Box>
    </>
  )
}

export default IndexScreen
