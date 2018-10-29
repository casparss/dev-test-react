import { DictionaryInt } from '../state/Dictionaries/Dictionaries.types'
import { MappingInt } from '../state/Mappings/Mappings.types'

export const dictionaryById = (state: any, dictionaryId: string) =>
  state.dictionaries.find(({ id }: { id: string }) => id === dictionaryId)

export const populateMappings = (dictionary: DictionaryInt, mappings: MappingInt[]) => ({
  ...dictionary,
  mappings: dictionary.mappings.map(id => mappings[id])
})

export const selectDictionaryById = (state: any, dictionaryId: string) => {
  const dictionary = dictionaryById(state, dictionaryId)
  return dictionary ?
    populateMappings(dictionary, state.mappings) : null
}
