import { connect } from "react-redux"
import TransformView from '../../components/TransformView'
import { creators } from '../../state/Dictionaries'
import { StateInt } from '../../state/State.types'

const mapStateToProps = ({ data, dictionaries }: StateInt) => ({
  data,
  dictionaries
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: {
    select: (id: string) => dispatch(creators.select(id)),
    unselect: (id: string) => dispatch(creators.unselect(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransformView)
