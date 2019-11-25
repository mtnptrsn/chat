import { IMessage } from '../types/index'
import { ADD_MESSAGE, UPDATE_IS_LOADING } from './actionTypes'

export const addMessage = (message: IMessage) => ({
  type: ADD_MESSAGE,
  payload: message,
})

export const updateIsLoading = (isLoading: boolean) => ({
  type: UPDATE_IS_LOADING,
  payload: isLoading,
})
