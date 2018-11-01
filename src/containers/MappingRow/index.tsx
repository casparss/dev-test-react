import { connect } from "react-redux"
import MappingRow from '../../components/DictionaryEditor/MappingRow'
import { creators as uiCreators } from '../../state/UI'
import { creators as dictionariesCreators } from '../../state/Dictionaries'
import { creators as mappingsCreators } from '../../state/Mappings'
import { MappingFieldsInt } from '../../state/Mappings/Mappings.types'
import { StateInt } from '../../state/State.types'
import { selectDictionaryById } from '../../selectors'
import * as uniqid from 'uniqid'

const mapStateToProps = (state: StateInt) => ({
  dictionary: selectDictionaryById(
    state,
    state.ui.editMappings.dictionaryId || ''
  ),
  dictionaryId: state.ui.editMappings.dictionaryId
})

const mapDispatchToProps = (dispatch: any) => ({
  closeDictionaryEditor: () => dispatch(uiCreators.closeDictionaryEditor()),
  createMapping: (fields: MappingFieldsInt, dictionaryId: string) => {
    const mappingId = uniqid()
    dispatch(mappingsCreators.createMapping(fields, mappingId))
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
  const { dictionaryId } = propsFromState
  return {
    ...propsFromState,
    ...ownProps,
    ...propsFromDispatch,
    createMapping: (fields: MappingFieldsInt) =>
      propsFromDispatch.createMapping(fields, dictionaryId),
    removeMapping: (mappingId: string) => {
      propsFromDispatch.removeMapping(dictionaryId, mappingId)
    },
    editMapping: propsFromDispatch.editMapping
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MappingRow)
