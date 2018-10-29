import { createStore, combineReducers } from 'redux'
import { dictionaries } from './Dictionaries'
import { mappings } from './Mappings'
import { ui } from './UI'

const rootReducer = combineReducers({
  dictionaries,
  mappings,
  ui
})

export const store = createStore(
  rootReducer,
  {}
)
