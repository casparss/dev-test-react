import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import Edit from '@material-ui/icons/Edit'
import './MappingTable.style.scss'

interface MappingTableProps {
  dictionary: any
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
    return this.props.dictionary.mappings.map(this.row.bind(this))
  }

  row({ id, field, from, to }: { id: string, field: any, from: any, to: any}) {
    return (
      <TableRow>
        <TableCell>{field}</TableCell>
        <TableCell>{from}</TableCell>
        <TableCell>{to}</TableCell>
        <TableCell>
          <Button
            onClick={() => this.editRow(id)}
            variant="fab"
            color="secondary"
            aria-label="Edit"
          >
            <Edit />
          </Button>
        </TableCell>
      </TableRow>
    )
  }

  editRow(id: string) {
    console.log(id)
  }
}
