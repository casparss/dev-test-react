import { createStore, combineReducers } from 'redux'
import { dictionaries } from './Dictionaries'
import { mappings } from './Mappings'
import { ui } from './UI'
import mock from '../mock'

const rootReducer = combineReducers({
  dictionaries,
  mappings,
  ui,
  data: () => mock
})

export const store = createStore(
  rootReducer,
  {}
)
