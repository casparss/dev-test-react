import { ActionInt } from '../State.types'


/**
 * Models
 */

export interface MappingFieldsInt {
  field: string,
  from: string,
  to: string,
}

export interface MappingInt extends MappingFieldsInt {
  id: string,
  isNew?: boolean
}

/**
 * Payloads
 */

export interface CreateMappingPayloadInt extends ActionInt {
  payload: MappingInt
}

export interface RemoveMappingPayloadInt extends ActionInt {
  payload: {
    id: string
  }
}

export interface EditMappingPayloadInt extends ActionInt {
  payload: MappingInt
}

/**
 * Creators
 */

export interface CreateMappingCreatorFunc {
  (fields: MappingFieldsInt, id?: string): CreateMappingPayloadInt
}

export interface RemoveMappingCreatorFunc {
  (id: string): RemoveMappingPayloadInt
}

export interface EditMappingCreatorFunc {
  (edited: MappingInt): EditMappingPayloadInt
}

export interface MappingsCreatorsInt {
  createMapping: CreateMappingCreatorFunc,
  removeMapping: RemoveMappingCreatorFunc,
  editMapping: EditMappingCreatorFunc
}

/**
 * Reducers
 */

export interface CreateMappingReducerFunc {
  (state: MappingInt[], action: CreateMappingPayloadInt): MappingInt[]
}

export interface RemoveMappingReducerFunc {
  (state: MappingInt[], action: RemoveMappingPayloadInt): MappingInt[]
}

export interface EditMappingReducerFunc {
  (state: MappingInt[], action: EditMappingPayloadInt): MappingInt[]
}

export interface MappingsReducerInt {
  createMapping: CreateMappingReducerFunc,
  removeMapping: RemoveMappingReducerFunc,
  editMapping: EditMappingReducerFunc
}
