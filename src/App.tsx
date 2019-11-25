import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import IndexScreen from './screens/index'
import theme from './styles/theme'
import { store } from './store'

const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <IndexScreen />
    </Provider>
  </ThemeProvider>
)

export default App
