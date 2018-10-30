import { connect } from "react-redux"
import TransformView from '../../components/TransformView'
import { creators } from '../../state/UI'
import { StateInt } from '../../state/State.types'

const mapStateToProps = ({ data }: StateInt) => ({
  data: data
})

const mapDispatchToProps = (dispatch: any) => ({
  selectTab: (tabIndex: number) => dispatch(creators.selectTab(tabIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransformView)
