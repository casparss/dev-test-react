import * as React from 'react'
import { shallow } from '../../utils/Enzyme'
import DictionaryManager from './'

describe('DictionaryManager', () => {
  it('creates new dictionary with name.', () => {
    const fixture = {
      name: 'New dictionary'
    }

    const mock: any = {
      addDictionary: jest.fn(),
      removeDictionary: jest.fn(),
      dictionaries: []
    }

    const wrapper = shallow(<DictionaryManager {...mock} />)

    wrapper
      .find('.Text-input')
      .simulate('change', {target: {value: fixture.name}});

    wrapper
      .find('.Add-dictionary')
      .simulate('click')

    expect(mock.addDictionary).toHaveBeenCalledTimes(1)
    expect(mock.addDictionary).toHaveBeenCalledWith(fixture.name)
  })
})
