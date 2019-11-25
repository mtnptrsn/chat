import { ADD_MESSAGE, UPDATE_IS_LOADING } from '../store/actionTypes'
import {
  IMessageAction,
  IStatusAction,
  IMessageState,
  IStatusState,
} from './types'

const initialDataMessages: IMessageState = []
const initialDataStatus: IStatusState = { isLoading: true }

export const messagesReducer = (
  state = initialDataMessages,
  action: IMessageAction,
): IMessageState => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [...state, action.payload]
    }
  }
  return state
}

export const statusReducer = (
  state = initialDataStatus,
  action: IStatusAction,
): IStatusState => {
  switch (action.type) {
    case UPDATE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
  }
  return state
}
