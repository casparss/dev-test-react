import * as React from 'react'
import './List.style.scss'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import ConfirmDialog from '../../ConfirmDialog'

const MappingSummaryTable = ({ mappings }: any) => (
  <table className='Mapping-summary'>
    <thead>
      <tr>
        <th>Fieldname</th>
        <th>From</th>
        <th>To</th>
      </tr>
    </thead>
    <tbody>
      {mappings.map(({ field, from, to }: { field: string, from: string, to: string}, i: string) => (
        <tr key={i}>
          <td>{field}</td>
          <td>{from}</td>
          <td>{to}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

interface DictionaryListProps {
  dictionaries: any,
  removeDictionary: any,
  openEditor: any
}

interface DictionaryListState {
  deleteDictionaryId: string,
  openDialog: boolean
}

export default class DictionaryList extends React.Component<DictionaryListProps, DictionaryListState>  {
  state = {
    deleteDictionaryId: '',
    openDialog: false
  }

  removeDictionary(deleteDictionaryId: string) {
    this.setState({
      deleteDictionaryId,
      openDialog: true
    })
  }

  onDialogConfirm() {
    this.props.removeDictionary(this.state.deleteDictionaryId)
    this.onDialogClose()
  }

  onDialogClose() {
    this.setState({
      deleteDictionaryId: '',
      openDialog: false
    })
  }

  render() {
    const { dictionaries } = this.props
    return (
      <div>
        {dictionaries.map(this.item.bind(this))}
        <ConfirmDialog
          open={this.state.openDialog}
          title="Delete dictionary?"
          message={`Are you sure you want to delete dictionary?`}
          onConfirm={() => this.onDialogConfirm()}
          onClose={() => this.onDialogClose()}
        />
      </div>
    )
  }

  item({ name, id, mappings }: { name: string, id: string, mappings: any}, i: number) {
    return (
      <ExpansionPanel className='Dictionary-panel' key={i}>
        <ExpansionPanelSummary>
          <Typography>Dictionary: {name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={8}>
            {
              mappings.length > 0 ?
                <MappingSummaryTable mappings={mappings} />:
                <Typography variant="h6" color="inherit" >
                  No mappings
                </Typography>
            }

          </Grid>
          <Grid item xs={4}>
            {this.buttons(id)}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  buttons(id: string) {
    return (
      <div className="List-buttons">
        <Button
          onClick={() => this.props.openEditor(id)}
          variant="fab"
          color="secondary"
          aria-label="Edit"
        >
          <Edit />
        </Button>
        <Button
          className='Remove-button'
          onClick={() => this.removeDictionary(id)}
          variant="fab"
        >
          <DeleteIcon />
        </Button>
      </div>
    )
  }
}
