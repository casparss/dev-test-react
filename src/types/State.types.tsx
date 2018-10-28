import { DictionaryInt } from './Dictionaries'

export interface ActionInt {
  type: string
}

export interface StateInt {
  dictionaries: DictionaryInt[]
}
