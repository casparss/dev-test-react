import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

interface AddMappingInt {
  actions: any,
  mappings: any
}

export default class AddMapping extends React.Component<AddMappingInt> {
  state = {
    value: ''
  }

  render() {
    const { error, helperText, disabled } = this.fieldValidation
    return (
      <div className="Edit-bar">
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
        <TextField
          value={this.state.value}
          onChange={this.onChange}
          error={error}
          helperText={helperText}
        />
      </div>
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
