import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import Edit from '@material-ui/icons/Edit';
import './MappingTable.style.scss'

function SimpleTable() {
  return (
    <Paper className="Mapping-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Transform Field</TableCell>
            <TableCell numeric>From</TableCell>
            <TableCell numeric>To</TableCell>
            <TableCell numeric></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell numeric>Something</TableCell>
            <TableCell numeric>Hello</TableCell>
            <TableCell numeric>Pants</TableCell>
            <TableCell>
              <Button

                variant="fab"
                color="secondary"
                aria-label="Edit"
              >
                <Edit />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell numeric>Something</TableCell>
            <TableCell numeric>Hello</TableCell>
            <TableCell numeric>Pants</TableCell>
            <TableCell>
              <Button

                variant="fab"
                color="secondary"
                aria-label="Edit"
              >
                <Edit />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell numeric>Something</TableCell>
            <TableCell numeric>Hello</TableCell>
            <TableCell numeric>Pants</TableCell>
            <TableCell>
              <Button

                variant="fab"
                color="secondary"
                aria-label="Edit"
              >
                <Edit />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}


export default SimpleTable
