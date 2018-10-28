import { createStore, combineReducers } from 'redux'
import { dictionaries } from './Dictionaries'
import { ui } from './UI'

const rootReducer = combineReducers({
  dictionaries,
  ui
})

export const store = createStore(
  rootReducer,
  {}
)
