import * as React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { MappingInt } from '../../../state/Mappings/Mappings.types'

interface AddMappingInt {
  actions: any,
  mappings: MappingInt[]
}

export default class AddMapping extends React.Component<AddMappingInt> {
  state = {
    value: ''
  }

  render() {
    const { error, helperText, disabled } = this.fieldValidation
    return (
      <TableRow className="Edit-bar">
        <TableCell>
          <TextField
            label="Map on field"
            value={this.state.value}
            onChange={this.onChange}
            error={error}
            helperText={helperText}
          />
        </TableCell>
        <TableCell>
          <TextField
            label="Map on new field name"
            value={this.state.value}
            onChange={this.onChange}
            error={error}
            helperText={helperText}
          />
        </TableCell>
        <TableCell>
          <TextField
            label="Map on new field name"
            value={this.state.value}
            onChange={this.onChange}
            error={error}
            helperText={helperText}
          />
        </TableCell>
        <TableCell>
          <Button
            onClick={() => this.createMapping()}
            disabled={disabled}
            className="Add-mapping"
            variant="fab"
            color="primary"
            aria-label="Add"
          >
            <AddIcon />
          </Button>
        </TableCell>
      </TableRow>
    )
  }

  createMapping() {
    this.props.actions.createMapping(this.state.value)
    this.reset()
  }

  onChange = (event: any) => {
    this.setState({ value: event.target.value });
  }

  get fieldValidation() {
    const isEmpty = this.state.value === ''
    const isFieldConflict = this.isFieldConflict()
    return {
      error: isFieldConflict,
      helperText: isFieldConflict ? 'Fieldname is already mapped' : '',
      disabled: isEmpty || isFieldConflict
    }
  }

  isFieldConflict() {
    const { mappings } = this.props
    return !!mappings.find(({ field }: { field: any }) => this.state.value === field)
  }

  reset() {
    this.setState({ value: '' })
  }
}
