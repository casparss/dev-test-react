import {
  creators,
  ui
} from './'
import { UIInt } from './UI.types'

describe('UI', () => {
  describe('Creators', () => {
    it('Select tab.', () => {
      const action = creators.selectTab(1)
      expect(action.payload.tabIndex).toBe(1)
    })
    it('Open dicionary editor.', () => {
      const fixture = {
        id: "abc123"
      }
      const action = creators.openDictionaryEditor(fixture.id)
      expect(action.payload.dictionaryId).toBe(fixture.id)
    })
  })

  describe('Reducers', () => {
    it('Select tab.', () => {
      const stateFixture: UIInt = {
        selectedTabIndex: 0,
        editMappings: {
          dictionaryId: null,
          isEditing: false
        }
      }
      const state = ui(stateFixture, creators.selectTab(2))
      expect(state.selectedTabIndex).toBe(2)
    })

    it('Open editor.', () => {
      const stateFixture: UIInt = {
        selectedTabIndex: 0,
        editMappings: {
          dictionaryId: null,
          isEditing: false
        }
      }
      const actionArgFixture = 'abc123'
      const state = ui(stateFixture, creators.openDictionaryEditor(actionArgFixture))
      expect(state.editMappings.dictionaryId).toBe(actionArgFixture)
      expect(state.editMappings.isEditing).toBeTruthy
    })
  })
})
