import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './MappingTable.style.scss'
import AddMapping from './AddMapping.component'
import DeleteIcon from '@material-ui/icons/Delete'

interface MappingTableProps {
  dictionary: any,
  actions: any
}

export default class MappingTable extends React.Component<MappingTableProps> {
  render() {
    return this.props.dictionary ? this.main : <div></div>
  }

  get main() {
    return (
      <Paper className="Mapping-table">
        <Table>
          <TableHead>
            {this.head}
          </TableHead>
          <TableBody>
            {this.body}
          </TableBody>
        </Table>
        <AddMapping actions={this.props.actions} />
      </Paper>
    )
  }

  get head() {
    return (
      <TableRow>
        <TableCell>Transform Field</TableCell>
        <TableCell numeric>From</TableCell>
        <TableCell numeric>To</TableCell>
        <TableCell numeric></TableCell>
      </TableRow>
    )
  }

  get body() {
    return this.props.dictionary.mappings
      .map((mappings: any, i: number) =>
        <MappingRow
          key={i}
          {...mappings}
          onChange={newMapping => this.props.actions.editMapping(newMapping)}
          onDelete={(mappingId: string) => this.props.actions.removeMapping(mappingId)}
        />
      )
  }

  editRow(id: string) {
    console.log(id)
  }
}

interface MappingRowPropsInt {
  onChange(state: any): void,
  onDelete(state: any): void
}

class MappingRow extends React.Component<MappingRowPropsInt> {
  state = {
    ...this.props
  }

  updateField = (fieldName: string, value: string) => {
    this.setState({ [fieldName]: value })
    this.props.onChange(this.state)
  }

  field(fieldName: string) {
    return (
      <TableCell>
        <TextField
          value={this.state[fieldName]}
          onChange={(event) => this.updateField(fieldName, event.target.value)}
        />
      </TableCell>
    )
  }

  render() {
    return (
      <TableRow>
        {this.field('field')}
        {this.field('from')}
        {this.field('to')}
        <TableCell>
          <Button
            onClick={() => this.props.onDelete(this.state.id)}
            variant="fab"
            aria-label="Remove"
          >
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
    )
  }
}
