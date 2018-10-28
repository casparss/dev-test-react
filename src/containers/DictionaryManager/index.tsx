import { connect } from "react-redux"
import DictionaryManager from '../../components/DictionaryManager'
import { creators } from '../../state/Dictionaries'
import { DictionaryInt } from '../../types/Dictionaries'

const mapStateToProps = ({ dictionaries }: { dictionaries: DictionaryInt[] }) => ({
  dictionaries
})

const mapDispatchToProps = (dispatch: any) => ({
  addDictionary: (name: string) => dispatch(creators.addDictionary(name)),
  removeDictionary: (id: string) => dispatch(creators.removeDictionary(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictionaryManager)
