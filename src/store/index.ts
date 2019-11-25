import { combineReducers, createStore } from 'redux'
import { messagesReducer, statusReducer } from './reducers'

const rootReducer = combineReducers({
  messages: messagesReducer,
  status: statusReducer,
})

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)
