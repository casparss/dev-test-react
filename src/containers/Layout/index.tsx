import { connect } from "react-redux"
import { Layout } from '../../components/Layout'
import { creators } from '../../state/UI'
// simport { UIInt } from '../../state/UI/UI.types'

const mapStateToProps = ({ ui }:any) => ({
  selectedTabIndex: ui.selectedTabIndex
})

const mapDispatchToProps = (dispatch: any) => ({
  selectTab: (tabIndex: number) => dispatch(creators.selectTab(tabIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
