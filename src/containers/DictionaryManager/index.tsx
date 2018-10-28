import { connect } from "react-redux"
import DictionaryManager from '../../components/DictionaryManager'
import { creators } from '../../state/Dictionaries'
import { creators as uiCreators } from '../../state/UI'
import { StateInt } from '../../state/State.types'

const mapStateToProps = ({ dictionaries }: StateInt) => ({
  dictionaries
})

const mapDispatchToProps = (dispatch: any) => ({
  addDictionary: (name: string) => dispatch(creators.addDictionary(name)),
  removeDictionary: (id: string) => dispatch(creators.removeDictionary(id)),
  openEditor: (id: string) => dispatch(uiCreators.openDictionaryEditor(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictionaryManager)
