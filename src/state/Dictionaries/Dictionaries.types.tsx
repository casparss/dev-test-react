import { ActionInt } from '../State.types'

export interface MappingInt {
  id: string,
  field: number,
  from: string,
  to: string
}

export interface DictionaryInt {
  id: string,
  name: string,
  mappings: MappingInt[]
}

/**
 * Payloads
 */

export interface AddDictionaryPayloadInt extends ActionInt {
  payload: {
    name: string
  }
}

export interface RemoveDictionaryPayloadInt extends ActionInt {
  payload: {
    id: string
  }
}

/**
 * Creators
 */

export interface AddDictionaryCreatorFunc {
  (name: string): AddDictionaryPayloadInt
}

export interface RemoveDictionaryCreatorFunc {
  (id: string): RemoveDictionaryPayloadInt
}

export interface DictionaryCreatorsInt {
  addDictionary: AddDictionaryCreatorFunc,
  removeDictionary: RemoveDictionaryCreatorFunc
}

/**
 * Reducers
 */

interface AddDictionaryReducerFunc {
  (state: DictionaryInt[], action: AddDictionaryPayloadInt): DictionaryInt[]
}

interface RemoveDictionaryReducerFunc {
  (state: DictionaryInt[], action: RemoveDictionaryPayloadInt): DictionaryInt[]
}

export interface DictionaryReducersInt {
  addDictionary: AddDictionaryReducerFunc,
  removeDictionary: RemoveDictionaryReducerFunc
}
