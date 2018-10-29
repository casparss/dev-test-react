import { connect } from "react-redux"
import DictionaryEditor from '../../components/DictionaryEditor'
import { creators as uiCreators } from '../../state/UI'
import { creators as dictionariesCreators } from '../../state/Dictionaries'
import { creators as mappingsCreators } from '../../state/Mappings'
import { StateInt } from '../../state/State.types'
import { selectDictionaryById } from '../../selectors'
import * as uniqid from 'uniqid'

const mapStateToProps = (state: StateInt) => ({
  open: state.ui.editMappings.isEditing,
  dictionary: selectDictionaryById(
    state,
    state.ui.editMappings.dictionaryId || ''
  )
})

const mapDispatchToProps = (dispatch: any) => ({
  closeDictionaryEditor: () => dispatch(uiCreators.closeDictionaryEditor()),
  createMapping: (dictionaryId: string) => {
    const mappingId = uniqid()
    dispatch(mappingsCreators.createMapping(mappingId))
    dispatch(dictionariesCreators.addMapping(
      dictionaryId,
      mappingId
    ))
  },
  removeMapping: (dictionaryId: string, mappingId: string) => {
    dispatch(mappingsCreators.removeMapping(mappingId))
    dispatch(dictionariesCreators.removeMapping(
      dictionaryId,
      mappingId
    ))
  },
  editMapping: () => {

  }
})

const mergeProps = (propsFromState: any, propsFromDispatch: any, ownProps: any) => {
  const dictionaryId = (propsFromState.dictionary || {}).id
  return {
    ...propsFromState,
    ...ownProps,
    ...propsFromDispatch,
    actions: {
      createMapping: () => propsFromDispatch.createMapping(dictionaryId),
      removeMapping: (mappingId: string) => {
        propsFromDispatch.removeMapping(dictionaryId, mappingId)
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DictionaryEditor)
