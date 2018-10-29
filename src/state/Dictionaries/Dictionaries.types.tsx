import { ActionInt } from '../State.types'
import { MappingInt } from '../Mappings/Mappings.types'

/**
 * Models
 */

export type MappingID = string

export interface DictionaryInt {
  id: string,
  name: string,
  mappings: MappingID[]
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

export interface AddMappingPayloadInt extends ActionInt {
  payload: {
    dictionaryId: string,
    mappingId: string
  }
}

export interface RemoveMappingPayloadInt extends ActionInt {
  payload: {
    dictionaryId: string,
    mappingId: string
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

export interface AddMappingCreatorFunc {
  (dictionaryId: string, mappingId: string): AddMappingPayloadInt
}

export interface RemoveMappingCreatorFunc {
  (dictionaryId: string, mappingId: string): RemoveMappingPayloadInt
}

export interface DictionaryCreatorsInt {
  addDictionary: AddDictionaryCreatorFunc,
  removeDictionary: RemoveDictionaryCreatorFunc,
  addMapping: AddMappingCreatorFunc,
  removeMapping: RemoveMappingCreatorFunc
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

interface AddMappingReducerFunc {
  (state: DictionaryInt[], action: AddMappingPayloadInt): DictionaryInt[]
}

interface RemoveMappingReducerFunc {
  (state: DictionaryInt[], action: RemoveMappingPayloadInt): DictionaryInt[]
}

export interface DictionaryReducersInt {
  addDictionary: AddDictionaryReducerFunc,
  removeDictionary: RemoveDictionaryReducerFunc,
  addMapping: AddMappingReducerFunc,
  removeMapping: RemoveMappingReducerFunc
}
