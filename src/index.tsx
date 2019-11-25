import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { initializeSocketConnection, subscribeToMessages } from './api/socket'
;(() => {
  if (
    !((process.env.REACT_APP_ENDPOINT as string) && process.env.REACT_APP_TOKEN)
  )
    return alert("Endpoint / token wasn'nt found. Please add dotenv file")

  initializeSocketConnection()
  subscribeToMessages()

  ReactDOM.render(<App />, document.getElementById('root'))
})()

serviceWorker.unregister()
