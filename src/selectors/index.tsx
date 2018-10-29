import { DictionaryInt } from '../state/Dictionaries/Dictionaries.types'
import { MappingInt } from '../state/Mappings/Mappings.types'

export const selectDictionaryById = (dictionaryId: string | null, dictionaries: DictionaryInt[]) =>
  dictionaries.find(({ id }: { id: string }) => id === dictionaryId)

export const populateMappings = (dictionaries: DictionaryInt[], mappings: MappingInt[]) => {
  dictionaries.map(dictionary => {
    return {
      ...dictionary,
      mappings: dictionary.mappings.map(id => mappings[id])
    }
  })
}
