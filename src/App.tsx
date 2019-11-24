import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import IndexScreen from './screens/index'
import theme from './styles/theme'

const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <IndexScreen />
  </ThemeProvider>
)

export default App
