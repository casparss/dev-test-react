import { connect } from "react-redux"
import DictionaryEditor from '../../components/DictionaryEditor'
// import { creators } from '../../state/UI'
import { StateInt } from '../../state/State.types'
import { DictionaryInt } from '../../state/Dictionaries/Dictionaries.types'

const selectDictionaryById = (dictionaryId: string | null, dictionaries: DictionaryInt[]) =>
  dictionaries.find(({ id }: { id: string }) => id === dictionaryId)

const mapStateToProps = ({ ui, dictionaries }: StateInt) => ({
  open: ui.editMappings.isEditing,
  dictionary: selectDictionaryById(ui.editMappings.dictionaryId, dictionaries)
})

const mapDispatchToProps = () => ({
  // selectTab: () => dispatch(creators.selectTab(tabIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictionaryEditor)
