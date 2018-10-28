import {
  creators,
  ui,
  CLOSE_DICTIONARY_MAPPINGS
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
    it('Close dicionary editor.', () => {
      const action = creators.closeDictionaryEditor()
      expect(action.type).toBe(CLOSE_DICTIONARY_MAPPINGS)
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

    it('Close editor.', () => {
      const stateFixture: UIInt = {
        selectedTabIndex: 0,
        editMappings: {
          dictionaryId: null,
          isEditing: false
        }
      }
      const state = ui(stateFixture, creators.closeDictionaryEditor())
      expect(state.editMappings.dictionaryId).toBe(null)
      expect(state.editMappings.isEditing).toBeFalsy
    })
  })
})
