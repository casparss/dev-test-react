import * as React from 'react'
import {
  MappingInt,
  MappingFieldsInt
} from '../../../state/Mappings/Mappings.types'
import { DictionaryPopulatedInt } from '../../../state/Dictionaries/Dictionaries.types'
import { mapValues } from 'lodash'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import './MappingRow.style.scss'

interface MappingRowPropsInt {
  dictionary: DictionaryPopulatedInt,
  mappingList: MappingInt[],
  mapping?: MappingInt,
  editMapping(mapping: MappingInt): void,
  removeMapping(id: string): void,
  createMapping(mapping: MappingFieldsInt): void,
  create: boolean
}

export default class MappingRow extends React.Component<MappingRowPropsInt> {
  state = {
    id: '',
    field: '',
    from: '',
    to: '',
    ...this.props.mapping
  }

  render() {
    return (
      <TableRow>
        {this.field('field')}
        {this.field('from', this.validateFrom)}
        {this.field('to')}
        {this.buttons}
      </TableRow>
    )
  }

  field(fieldName: string, validation = {}) {
    return (
      <TableCell>
        <TextField
          value={this.state[fieldName]}
          onChange={(event) => this.updateField(fieldName, event.target.value)}
          {...validation}
        />
      </TableCell>
    )
  }

  get buttons() {
    return (
      <TableCell>
        {this.props.create ? this.createButton : this.deleteButton}
      </TableCell>
    )
  }

  get createButton() {
    return (
      <Button
        className="Add-mapping"
        onClick={() => this.createMapping()}
        variant="fab"
        color="primary"
        aria-label="Create"
        disabled={this.isEmpty}
      >
        <AddIcon />
      </Button>
    )
  }

  get deleteButton() {
    return (
      <Button
        className="Delete-mapping"
        onClick={() => this.props.removeMapping(this.state.id)}
        variant="fab"
        aria-label="Remove"
      >
        <DeleteIcon />
      </Button>
    )
  }

  updateField = (fieldName: string, value: string) => {
    this.setState({ [fieldName]: value }, () => {
      if(!this.props.create) this.props.editMapping(this.state)
    })
  }

  createMapping() {
    this.props.createMapping(this.fields)
    this.setState(mapValues(this.state, () => ''))
  }

  get fields() {
    const { field, to, from } = this.state
    return { field, to, from }
  }

  get isEmpty() {
    return !(this.state.from.length > 0 && this.state.field.length > 0)
  }

  get validateFrom() {
    const error = this.isConflict
    return {
      error,
      helperText: error ? 'From is already mapped on this field.' : '',
    }
  }

  get isConflict() {
    return !!this.props.dictionary.mappings
      .filter(({ id }) => id !== this.state.id)
      .find(({ field, from }) => field === this.state.field && from === this.state.from)
  }
}
