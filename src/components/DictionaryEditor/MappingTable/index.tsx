import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import './MappingTable.style.scss'
import MappingRow from '../../../containers/MappingRow'
import { MappingInt } from '../../../state/Mappings/Mappings.types'

interface MappingTableProps {
  //@TODO: use dictionary int
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
            <MappingRow create />
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
    return this.props.dictionary.mappings
      .map((mapping: MappingInt, i: number, mappingList: MappingInt[]) =>
        <MappingRow key={i} mapping={mapping} />
      )
  }
}
