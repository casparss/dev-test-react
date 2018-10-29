import {
  AddMappingPayloadInt,
  RemoveMappingPayloadInt,
  DictionaryInt
} from './Dictionaries.types'
import {
  creators,
  dictionaries
} from './'

describe('Dictionaries', () => {
  describe('Creators', () => {
    it('adds mapping ID to add mapping payload.', () => {
      const [dictionaryId, mappingId] = ['poiu1234', 'wdawdawdw']

      const action: AddMappingPayloadInt = creators.addMapping(dictionaryId, mappingId)
      expect(action.payload.dictionaryId).toBe(dictionaryId)
      expect(action.payload.mappingId).toBe(mappingId)
    })

    it('adds ID to remove mapping payload.', () => {
      const [dictionaryId, mappingId] = ['poiu1234', 'wdawdawdw']

      const action: RemoveMappingPayloadInt = creators.removeMapping(dictionaryId, mappingId)
      expect(action.payload.dictionaryId).toBe(dictionaryId)
      expect(action.payload.mappingId).toBe(mappingId)
    })
  })
  describe('Reducers', () => {
    it('adds mapping ID to dictionary.', () => {
      const [dictionaryId, mappingId] = ['9876', 'wdawdawdw']

      const stateFixture: DictionaryInt[] = [
        {
          id: '9876',
          name: 'Something',
          mappings: [
            'abc123',
            'ref456',
            'ref987'
          ]
        },
        {
          id: '5477',
          name: 'People',
          mappings: [
            'abcdd3',
            'refaa6',
            'refw7'
          ]
        }
      ]
      const state = dictionaries(stateFixture, creators.addMapping(dictionaryId, mappingId))
      const dictionary: any = state.find(({ id }) => id === dictionaryId)
      expect(dictionary.mappings).toContain(mappingId)
    })
    it('remove mapping ID to dictionary.', () => {
      const [dictionaryId, mappingId] = ['5477', 'refw7']

      const stateFixture: DictionaryInt[] = [
        {
          id: '9876',
          name: 'Something',
          mappings: [
            'abc123',
            'ref456',
            'ref987'
          ]
        },
        {
          id: '5477',
          name: 'People',
          mappings: [
            'abcdd3',
            'refaa6',
            'refw7'
          ]
        }
      ]
      const state = dictionaries(stateFixture, creators.removeMapping(dictionaryId, mappingId))
      const dictionary: any = state.find(({ id }) => id === dictionaryId)
      expect(dictionary.mappings).not.toContain(mappingId)
    })
  })
})
