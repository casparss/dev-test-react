import { connect } from "react-redux"
import { Layout } from '../../components/Layout'
import { creators } from '../../state/UI'
import { StateInt } from '../../state/State.types'

const mapStateToProps = ({ ui }: StateInt) => ({
  selectedTabIndex: ui.selectedTabIndex
})

const mapDispatchToProps = (dispatch: any) => ({
  selectTab: (tabIndex: number) => dispatch(creators.selectTab(tabIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
