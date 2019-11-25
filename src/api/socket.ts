import { SocketClient } from '@cognigy/socket-client'
import { store } from '../store'
import { addMessage, updateIsLoading } from '../store/actions'

export let client: SocketClient

export const subscribeToMessages = () =>
  client.on('output', output =>
    store.dispatch(addMessage({ message: output.text, isFromBot: true })),
  )

export const sendMessage = (message: string) => {
  store.dispatch(addMessage({ message, isFromBot: false }))
  client.sendMessage(message)
}

export const initializeSocketConnection = async () => {
  client = new SocketClient(
    process.env.REACT_APP_ENDPOINT as string,
    process.env.REACT_APP_TOKEN as string,
  )
  await client.connect()
  store.dispatch(updateIsLoading(false))
}
