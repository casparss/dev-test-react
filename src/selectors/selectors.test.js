import * as uniqid from 'uniqid'
import {
  dictionaryById,
  populateMappings,
  populateDictionariesMappings,
  selectDictionaryById
} from './'

describe('Selectors', () => {
  it('dictionaryById()', () => {
    const fixtureId = uniqid()
    const fixture = {
      state: {
        dictionaries: [{
          id: fixtureId,
          name: 'Hello',
          mappings: []
        },
        {
          id: uniqid(),
          name: 'Hi',
          mappings: []
        },
        {
          id: uniqid(),
          name: 'Yo',
          mappings: []
        }]
      },
      dictionaryId: fixtureId
    }
    const result = dictionaryById(fixture.state, fixture.dictionaryId)
    expect(result.id).toBe(fixture.state.dictionaries[0].id)
    expect(result.name).toBe(fixture.state.dictionaries[0].name)
  })
  it('populateMappings()', () => {
    const fixtureId1 = uniqid()
    const fixtureId2 = uniqid()
    const fixture = {
      dictionary: {
        id: uniqid(),
        name: 'Hello',
        mappings: [fixtureId1, fixtureId2]
      },
      mappings: [{
        id: fixtureId1,
        name: 'Hello',
        mappings: []
      },
      {
        id: fixtureId2,
        from: 'thing',
        to: 'bomb',
        name: 'hello'
      },
      {
        id: uniqid(),
        from: 'd',
        to: 'dwa',
        name: 'dw'
      },
      {
        id: uniqid(),
        from: 'wa',
        to: 'daw',
        name: 'dawdaw'
      }]
    }
    const result = populateMappings(fixture.dictionary, fixture.mappings)
    expect(result.mappings[0]).toBe(fixture.mappings[0])
    expect(result.mappings[1]).toBe(fixture.mappings[1])
  })
  /*
  it('populateDictionariesMappings()', () => {
    const result = populateDictionariesMappings()
    const fixtureId1 = uniqid()
    const fixtureId2 = uniqid()
    const fixture = {
      dictionaries: [{
        id: uniqid(),
        name: 'Hello',
        mappings: [fixtureId1, fixtureId2]
      },
      {
        id: uniqid(),
        name: 'Hello',
        mappings: [fixtureId1, fixtureId2]
      },
      {
        id: uniqid(),
        name: 'Hello',
        mappings: [fixtureId1, fixtureId2]
      }],
      mappings: [{
        id: fixtureId1,
        name: 'Hello',
        mappings: []
      },
      {
        id: fixtureId2,
        from: 'thing',
        to: 'bomb',
        name: 'hello'
      },
      {
        id: uniqid(),
        from: 'd',
        to: 'dwa',
        name: 'dw'
      },
      {
        id: uniqid(),
        from: 'wa',
        to: 'daw',
        name: 'dawdaw'
      }]
    }
    const result = populateMappings(fixture.dictionary, fixture.mappings)
    expect(result.mappings[0]).toBe(fixture.mappings[0])
    expect(result.mappings[1]).toBe(fixture.mappings[1])
  })

  it('selectDictionaryById()', () => {

  })*/
})
