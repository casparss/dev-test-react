import {
  CreateMappingPayloadInt,
  RemoveMappingPayloadInt,
  EditMappingPayloadInt,
  MappingInt
} from './Dictionaries.types'
import {
  creators,
  mappings
} from './'

describe('Dictionaries', () => {
  describe('Creators', () => {
    it('adds mapping ID to dictionary.', () => {
      const fixture = {

      }
      const action: EditMappingPayloadInt = creators.addMapping(fixture)
      expect(action.payload.id).toBe(fixture.id)
    })
  })
  describe('Reducers', () => {
    it('adds mapping ID to dictionary.', () => {
      /*const stateFixture: MappingInt[] = [
        {
          id: 'abc123',
          field: 'Pants',
          from: 'Briefs',
          to: 'Boxers',
        },
        {
          id: 'def456',
          field: 'Balls',
          from: 'Tennis',
          to: 'Football',
        },
      ]
      const state = mappings(stateFixture, creators.createMapping())
      const newMapping: any = state.find(({ isNew }) => isNew === true)
      expect(newMapping.field).toBe('')
      expect(newMapping.from).toBe('')
      expect(newMapping.to).toBe('')*/
      throw new Error('test fail')
    })
  })
})
