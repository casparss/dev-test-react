import * as uniqid from 'uniqid'
import {
  DictionaryCreatorsInt,
  DictionaryReducersInt,
  DictionaryInt
} from './Dictionaries.types'
import { replaceItemByID, findByID } from '../../utils/Transform'

/**
 * Actions
 */

export const ADD_DICTIONARY: string = 'ADD_DICTIONARY'
export const REMOVE_DICTIONARY: string = 'REMOVE_DICTIONARY'
export const ADD_MAPPING_ID: string = 'ADD_MAPPING_ID'
export const REMOVE_MAPPING_ID: string = 'REMOVE_MAPPING_ID'
export const SELECT_DICTIONARY: string = 'SELECT_DICTIONARY'
export const UNSELECT_DICTIONARY: string = 'UNSELECT_DICTIONARY'

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
  }),
  select: (dictionaryId) => ({
    type: SELECT_DICTIONARY,
    payload: {
      dictionaryId
    }
  }),
  unselect: (dictionaryId) => ({
    type: UNSELECT_DICTIONARY,
    payload: {
      dictionaryId
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
      mappings: [],
      selected: false
    }
    return [...state, newDictionary]
  },
  removeDictionary: (state, action) =>
    state.filter(dictionary => dictionary.id !== action.payload.id ),
  addMapping: (state, action) => {
    const transform = (mappings: any, mappingId: string) =>
      [...mappings, mappingId]
    return mappingHelper(state, action, transform)
  },
  removeMapping: (state, action) => {
    const transform = (mappings: any, mappingId: string) => {
      return mappings.filter((idToRemove: string) => idToRemove !== mappingId)
    }
    return mappingHelper(state, action, transform)
  },
  select: (state, action) => selectHelper(state, action, true),
  unselect: (state, action) => selectHelper(state, action, false)
}

/**
 * Helpers
 */
const selectHelper = (state: any, action: any, selected: boolean) => {
  const { dictionaryId } = action.payload
  const dictionary = findByID(dictionaryId, state)
  const newDictionary = {
    ...dictionary,
    selected
  }

  return replaceItemByID(
    state,
    dictionaryId,
    newDictionary
  )
}

const mappingHelper = (state: any, action: any, transformFunc: any) => {
  const { dictionaryId, mappingId } = action.payload
  const dictionary: any = state.find(({ id }: { id: string }) => id === dictionaryId)

  const mappings = transformFunc([...dictionary.mappings], mappingId)

  const newDictionary = {
    ...dictionary,
    mappings
  }

  return replaceItemByID(
    state,
    dictionaryId,
    newDictionary
  )
}

/**
 * Reducers
 */

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
    case SELECT_DICTIONARY:
      return reducers.select(state, action)
    case UNSELECT_DICTIONARY:
      return reducers.unselect(state, action)
    default:
      return state
  }
}
