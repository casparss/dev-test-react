import * as uniqid from 'uniqid'
import {
  MappingsCreatorsInt,
  MappingsReducerInt,
  MappingInt
} from './Mappings.types'

/**
 * Actions
 */

export const CREATE_MAPPING: string = 'CREATE_MAPPING'
export const REMOVE_MAPPING: string = 'REMOVE_MAPPING'
export const EDIT_MAPPING: string = 'EDIT_MAPPING'

/**
* Creators
*/

export const creators: MappingsCreatorsInt = {
  createMapping: (id?: string) => ({
    type: CREATE_MAPPING,
    payload: {
      id: id ? id : uniqid(),
      field: '',
      from: '',
      to: '',
      isNew: true
    }
  }),
  removeMapping: id => ({
    type: REMOVE_MAPPING,
    payload: {
      id
    }
  }),
  editMapping: edited => ({
    type: EDIT_MAPPING,
    payload: {
      ...edited
    }
  })
}

/**
 * Reducers
 */

const reducers: MappingsReducerInt = {
  createMapping: (state, action) => [...state, action.payload],
  removeMapping: (state, action) => {
    return state.filter(({ id }) => id !== action.payload.id)
  },
  editMapping: (state, action) => {
    const currentMapping = state.find(({ id }) => id === action.payload.id)
    const newMapping = {
      ...currentMapping,
      ...action.payload
    }
    const newState = reducers.removeMapping(state, action)
    return [...newState, newMapping]
  }
}

const INITIAL_STATE: MappingInt[] = []

export const mappings = (state: MappingInt[] = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case CREATE_MAPPING:
      return reducers.createMapping(state, action)
    case REMOVE_MAPPING:
      return reducers.removeMapping(state, action)
    case EDIT_MAPPING:
      return reducers.editMapping(state, action)
    default:
      return state
  }
}
