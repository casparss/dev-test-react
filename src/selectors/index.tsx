import { DictionaryInt, DictionaryPopulatedInt } from '../state/Dictionaries/Dictionaries.types'
import { MappingInt } from '../state/Mappings/Mappings.types'

export const dictionaryById = (state: any, dictionaryId: string) =>
  state.dictionaries.find(({ id }: { id: string }) => id === dictionaryId)

export const populateMappings = (dictionary: DictionaryInt, mappings: MappingInt[]) => ({
  ...dictionary,
  mappings: dictionary.mappings
    .map((mappingId: string) => mappings.find(({ id }) => id === mappingId))
})

//@TODO:
/*
didn't want to use an any cast here for dictionaries, but for some weird reason Typescript
kept complaining that in containers/Dictionaries/index.tsx the populated type was being
used when it definitely wasn't, needs further investigation
*/
export const populateDictionariesMappings = (dictionaries: any, mappings: MappingInt[]) => {
  return dictionaries.map((dictionary: any) => populateMappings(dictionary, mappings))
}

export const selectDictionaryById = (state: any, dictionaryId: string) => {
  const dictionary = dictionaryById(state, dictionaryId)
  return dictionary ?
    populateMappings(dictionary, state.mappings) : null
}

export const getSelectedDictionaries = (dictionaries: DictionaryPopulatedInt[]) =>
  dictionaries.find(({ selected }: any) => selected)
