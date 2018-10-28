import * as React from 'react'
import { shallow } from '../../../utils/Enzyme'
import DictionaryList from './'

describe('DictionaryManager', () => {
  it('removes dictionary by id.', () => {
    const fixture = {
      id: '1221'
    }

    const mock: any = {
      addDictionary: jest.fn(),
      removeDictionary: jest.fn(),
      dictionaries: [{
        id: fixture.id,
        name: 'Currency',
        mappings: [
          {
            id: 'dwdwa',
            field: 11,
            from: 'Bob',
            to: 'John'
          }
        ]
      }]
    }

    const wrapper = shallow(<DictionaryList {...mock} />)

    wrapper
      .find('.Dictionary-panel .Remove-button')
      .simulate('click')

    expect(mock.removeDictionary).toHaveBeenCalledTimes(1)
    expect(mock.removeDictionary).toHaveBeenCalledWith(fixture.id)
  });
})
