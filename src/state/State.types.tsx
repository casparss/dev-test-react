import { MappingsInt } from './Mappings/Mappings.types'
import { DictionaryInt } from './Dictionaries/Dictionaries.types'
import { UIInt } from './UI/UI.types'

export interface ActionInt {
  type: string
}

export interface StateInt {
  dictionaries: DictionaryInt[],
  ui: UIInt,
  mappings: MappingsInt
}
