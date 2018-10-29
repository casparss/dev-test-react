import * as React from 'react'
import DictionaryList from './List'
import DictionaryEditor from '../../containers/DictionaryEditor'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import './DictionaryManager.style.scss'

interface DictionaryManagerProps {
  dictionaries: any,
  removeDictionary: any,
  addDictionary: any,
  openEditor: any,
  doesNameExist: any
}

interface DictionaryManagerState {
  newDictionaryName: string
}

export default class DictionaryManager extends React.Component<DictionaryManagerProps, DictionaryManagerState> {
  state = {
    newDictionaryName: ''
  }

  render() {
    return (
      <div>
        {this.addButton()}
        <DictionaryList
          openEditor={this.props.openEditor}
          dictionaries={this.props.dictionaries}
          removeDictionary={this.props.removeDictionary}
        />
        <DictionaryEditor />
      </div>
    )
  }

  updateName(newDictionaryName: string) {
    this.setState({
      newDictionaryName
    })
  }

  addDictionary() {
    this.props.addDictionary(this.state.newDictionaryName)
    this.setState({
      newDictionaryName: ''
    })
  }

  addButton() {
    const doesNameExist = this.doesNameExist()
    return (
      <div className="Edit-bar">
        <Button
          className="Add-button"
          onClick={() => this.addDictionary()}
          variant="fab"
          color="primary"
          aria-label="Add"
          disabled={this.isFieldEmpty() || doesNameExist}
        >
          <AddIcon />
        </Button>
        <TextField
          error={doesNameExist}
          helperText={doesNameExist ? 'Dictionary name already exists.' : ''}
          className="Text-input"
          label="Name"
          value={this.state.newDictionaryName}
          onChange={(event) => this.updateName(event.target.value)}
          margin="normal"
          variant="outlined"
        />
      </div>
    )
  }

  doesNameExist() {
    const doesNameExist = this.props.dictionaries
      .find(({ name }: { name: string }) => name === this.state.newDictionaryName)
    return doesNameExist ? true : false
  }

  isFieldEmpty() {
    return this.state.newDictionaryName === ''
  }
}
