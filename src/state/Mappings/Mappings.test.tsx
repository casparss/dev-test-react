import {
  CreateMappingPayloadInt,
  RemoveMappingPayloadInt,
  EditMappingPayloadInt,
  MappingInt
} from './Mappings.types'
import {
  creators,
  mappings
} from './'

describe('Mappings', () => {
  describe('Creators', () => {
    it('creates mapping.', () => {
      const fieldsFixture = {
        field: 'hey',
        from: 'dwwda',
        to: 'wdadwa',
      }
      const fixture = {
        ...fieldsFixture,
        isNew: true
      }
      const action: CreateMappingPayloadInt = creators.createMapping(fieldsFixture)
      expect(action.payload.field).toBe(fixture.field)
      expect(action.payload.from).toBe(fixture.from)
      expect(action.payload.to).toBe(fixture.to)
      expect(action.payload.isNew).toBe(fixture.isNew)
    })

    it('removes mapping.', () => {
      const fixture = {
        id: 'poiuyt123'
      }
      const action: RemoveMappingPayloadInt = creators.removeMapping(fixture.id)
      expect(action.payload.id).toBe(fixture.id)
    })

    it('edits mapping.', () => {
      const fixture: MappingInt = {
        id: 'abc123',
        field: 'Greetings',
        from: 'Hi',
        to: 'Hello'
      }
      const action: EditMappingPayloadInt = creators.editMapping(fixture)
      expect(action.payload.id).toBe(fixture.id)
    })
  })
  describe('Reducers', () => {
    it('creates mapping.', () => {
      const fieldsFixture = {
        field: 'hey',
        from: 'dwwda',
        to: 'wdadwa',
      }
      const stateFixture: MappingInt[] = [
        {
          id: 'abc123',
          ...fieldsFixture
        },
        {
          id: 'def456',
          field: 'Balls',
          from: 'Tennis',
          to: 'Football',
        },
      ]
      const state = mappings(stateFixture, creators.createMapping(fieldsFixture))
      const newMapping: any = state.find(({ isNew }) => isNew === true)
      expect(newMapping.field).toBe(fieldsFixture.field)
      expect(newMapping.from).toBe(fieldsFixture.from)
      expect(newMapping.to).toBe(fieldsFixture.to)
    })

    it('removes mapping.', () => {
      const stateFixture: MappingInt[] = [
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
        }
      ]
      const state = mappings(stateFixture, creators.removeMapping(stateFixture[0].id))
      expect(state.length).toEqual(1)
    })

    it('edits mapping.', () => {
      const editFixture: MappingInt = {
        id: 'abc123',
        field: 'Greetings',
        from: 'Hi',
        to: 'Hello'
      }
      const stateFixture: MappingInt[] = [
        {
          id: 'abc123',
          field: 'Pants',
          from: 'Briefs',
          to: 'Boxers'
        },
        {
          id: 'def456',
          field: 'Balls',
          from: 'Tennis',
          to: 'Football',
        }
      ]
      const state = mappings(stateFixture, creators.editMapping(editFixture))
      const editMapping = state.find(({ id }: { id: string }) => id === editFixture.id)
      expect(editMapping).toEqual(editFixture)
    })
  })
})
