import { ActionInt } from '../../types/State.types'

export interface UIInt {
  selectedTabIndex: number,
  editMappings: {
    dictionaryId: string | null,
    isEditing: boolean
  }
}

/**
 * Payloads
 */

export interface SelectTabPayloadInt extends ActionInt {
  payload: {
    tabIndex: number
  }
}

export interface OpenEditorPayloadInt extends ActionInt {
  payload: {
    dictionaryId: string
  }
}

/**
 * Creators
 */

export interface SelectTabCreatorFunc {
  (tabIndex: number): SelectTabPayloadInt
}

export interface OpenEditorCreatorFunc {
  (dictionaryId: string): OpenEditorPayloadInt
}

export interface UICreatorsInt {
  selectTab: SelectTabCreatorFunc,
  openDictionaryEditor: OpenEditorCreatorFunc
}

/**
 * Reducers
 */

export interface SelectTabReducerFunc {
  (state: UIInt, action: SelectTabPayloadInt): UIInt
}

export interface OpenEditorReducerFunc {
  (state: UIInt, action: OpenEditorPayloadInt): UIInt
}

export interface UIReducersInt {
  selectTab: SelectTabReducerFunc,
  openDictionaryEditor: OpenEditorReducerFunc,
}
