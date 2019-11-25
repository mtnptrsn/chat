import { IMessage } from '../types/index'

interface Action<P> {
  type: string
  payload: P
}

export type IMessageAction = Action<IMessage>
export type IStatusAction = Action<boolean>

export type IMessageState = IMessage[]
export interface IStatusState {
  isLoading: boolean
}

export interface IReduxState {
  messages: IMessageState
  status: IStatusState
}
