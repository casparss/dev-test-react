import * as uniqid from 'uniqid'
import {
  DictionaryCreatorsInt,
  DictionaryReducersInt,
  DictionaryInt
} from './Dictionaries.types'

/**
 * Actions
 */

export const ADD_DICTIONARY: string = 'ADD_DICTIONARY'
export const REMOVE_DICTIONARY: string = 'REMOVE_DICTIONARY'
export const ADD_MAPPING_ID: string = 'ADD_MAPPING_ID'
export const REMOVE_MAPPING_ID: string = 'REMOVE_MAPPING_ID'

/**
 * Creators
 */

export const creators: DictionaryCreatorsInt = {
  addDictionary: name => ({
    type: ADD_DICTIONARY,
    payload: {
      name
    }
  }),
  removeDictionary: id => ({
    type: REMOVE_DICTIONARY,
    payload: {
      id
    }
  }),
  addMapping: (dictionaryId, mappingId) => ({
    type: ADD_MAPPING_ID,
    payload: {
      dictionaryId,
      mappingId
    }
  }),
  removeMapping: (dictionaryId, mappingId) => ({
    type: REMOVE_MAPPING_ID,
    payload: {
      dictionaryId,
      mappingId
    }
  })
}

/**
 * Reducers
 */

const reducers: DictionaryReducersInt = {
  addDictionary: (state, action) => {
    const newDictionary: DictionaryInt = {
      id: uniqid(),
      name: action.payload.name,
      mappings: []
    }
    return [...state, newDictionary]
  },
  removeDictionary: (state, action) =>
    state.filter(dictionary => dictionary.id !== action.payload.id ),
  addMapping: () => {},
  removeMapping: () => {}
}

export const dictionaries = (state: DictionaryInt[] = [], action: any) => {
  switch(action.type) {
    case ADD_DICTIONARY:
      return reducers.addDictionary(state, action)
    case REMOVE_DICTIONARY:
      return reducers.removeDictionary(state, action)
    case ADD_MAPPING_ID:
      return reducers.addMapping(state, action)
    case REMOVE_MAPPING_ID:
      return reducers.removeMapping(state, action)
    default:
      return state
  }
}
