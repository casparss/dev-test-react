import {
  UIInt,
  UIReducersInt,
  UICreatorsInt
} from './UI.types'

/**
 * Actions
 */

export const SELECT_TAB: string = 'SELECT_TAB'
export const OPEN_DICTIONARY_MAPPINGS: string = 'OPEN_DICTIONARY_MAPPINGS'
export const CLOSE_DICTIONARY_MAPPINGS: string = 'CLOSE_DICTIONARY_MAPPINGS'

/**
 * Creators
 */

export const creators: UICreatorsInt = {
  selectTab: (tabIndex: number) => ({
    type: SELECT_TAB,
    payload: {
      tabIndex
    }
  }),
  openDictionaryEditor: (dictionaryId: string) => ({
    type: OPEN_DICTIONARY_MAPPINGS,
    payload: {
      dictionaryId
    }
  }),
  closeDictionaryEditor: () => ({
    type: CLOSE_DICTIONARY_MAPPINGS
  })
}

/**
 * Reducers
 */

export const reducers: UIReducersInt = {
  selectTab: (state, action) => ({
    ...state,
    selectedTabIndex: action.payload.tabIndex
  }),
  openDictionaryEditor: (state, action) => ({
    ...state,
    editMappings: {
      dictionaryId: action.payload.dictionaryId,
      isEditing: true
    }
  }),
  closeDictionaryEditor: (state, action) => ({
    ...state,
    editMappings: {
      dictionaryId: null,
      isEditing: false
    }
  })
}

const INITIAL_STATE: UIInt = {
  selectedTabIndex: 0,
  editMappings: {
    dictionaryId: null,
    isEditing: false
  }
}

export const ui = (state: UIInt = INITIAL_STATE, action:any) => {
  switch(action.type) {
    case SELECT_TAB:
      return reducers.selectTab(state, action)
    case OPEN_DICTIONARY_MAPPINGS:
      return reducers.openDictionaryEditor(state, action)
    case CLOSE_DICTIONARY_MAPPINGS:
      return reducers.closeDictionaryEditor(state, action)
    default:
      return state
  }
}
