import React from 'react'

import InputBar from '../components/InputBar'
import Messages from '../components/Messages'

import { Box } from '@material-ui/core'
import { createGlobalStyle } from 'styled-components'

import mockMessages from '../mock/messages.json'

const GlobalStyles = createGlobalStyle({
  body: {
    margin: 0,
    overflow: 'hidden',
  },
  '*': {
    boxSizing: 'border-box',
  },
})

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Box display="flex" flexDirection="column" height="100vh" width="100%">
        <Messages messages={mockMessages} />
        <InputBar />
      </Box>
    </>
  )
}

export default App
