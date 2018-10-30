import { connect } from "react-redux"
import DictionaryEditor from '../../components/DictionaryEditor'
import { creators as uiCreators } from '../../state/UI'
import { creators as dictionariesCreators } from '../../state/Dictionaries'
import { creators as mappingsCreators } from '../../state/Mappings'
import { StateInt } from '../../state/State.types'
import { selectDictionaryById } from '../../selectors'
import * as uniqid from 'uniqid'

const mapStateToProps = (state: StateInt) => {
  console.log('state',state)
  return {
    open: state.ui.editMappings.isEditing,
    dictionary: selectDictionaryById(
      state,
      state.ui.editMappings.dictionaryId || ''
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  closeDictionaryEditor: () => dispatch(uiCreators.closeDictionaryEditor()),
  createMapping: (field: string, dictionaryId: string) => {
    const mappingId = uniqid()
    dispatch(mappingsCreators.createMapping(field, mappingId))
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
  editMapping: (editedMapping: any) => {
    dispatch(mappingsCreators.editMapping(editedMapping))
  }
})

const mergeProps = (propsFromState: any, propsFromDispatch: any, ownProps: any) => {
  const dictionaryId = (propsFromState.dictionary || {}).id
  return {
    ...propsFromState,
    ...ownProps,
    ...propsFromDispatch,
    actions: {
      createMapping: (field: string) =>
        propsFromDispatch.createMapping(field, dictionaryId),
      removeMapping: (mappingId: string) => {
        propsFromDispatch.removeMapping(dictionaryId, mappingId)
      },
      editMapping: propsFromDispatch.editMapping
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DictionaryEditor)
