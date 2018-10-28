import * as React from 'react'
import DictionaryList from './List'
import DictionaryEditor from '../DictionaryEditor'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

interface DictionaryManagerProps {
  dictionaries: any,
  removeDictionary: any,
  addDictionary: any,
  openEditor: any
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
    return (
      <div>
        <Button
          className="Add-button"
          onClick={() => this.addDictionary()}
          variant="fab"
          color="primary"
          aria-label="Add"
        >
          <AddIcon />
        </Button>
        <TextField
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
}
