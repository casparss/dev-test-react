import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

interface AddMappingInt {
  actions: any
}

export default class AddMapping extends React.Component<AddMappingInt> {
  state = {
    value: ''
  }

  render() {
    return (
      <div className="Edit-bar">
        <Button
          onClick={() => this.createMapping()}
          disabled={this.buttonDisabled}
          className="Add-button"
          variant="fab"
          color="primary"
          aria-label="Add"
        >
          <AddIcon />
        </Button>
        <TextField
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }

  createMapping() {
    this.props.actions.createMapping()
    this.reset()
  }

  onChange = (event: any) => {
    this.setState({ value: event.target.value });
  }

  get buttonDisabled() {
    // this.state.
    return false
  }

  reset() {
    this.setState({ value: '' })
  }
}

/*
error={doesNameExist}
helperText={doesNameExist ? 'Dictionary name already exists.' : ''}
label="Name"
value={this.state.newDictionaryName}
margin="normal"
variant="outlined"
 */
