import { connect } from "react-redux"
import DictionaryEditor from '../../components/DictionaryEditor'
import { creators } from '../../state/UI'
import { StateInt } from '../../state/State.types'
import { selectDictionaryById } from '../../selectors'

const mapStateToProps = (state: StateInt) => ({
  open: state.ui.editMappings.isEditing,
  dictionary: selectDictionaryById(
    state,
    state.ui.editMappings.dictionaryId || ''
  )
})

const mapDispatchToProps = (dispatch: any) => ({
  closeDictionaryEditor: () => dispatch(creators.closeDictionaryEditor())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictionaryEditor)
