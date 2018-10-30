import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

interface DictionarySelectorInt {
  dictionaries: Array<any>,
  actions: any
}

export default class DictionarySelector extends React.Component<DictionarySelectorInt> {
  state = {
    checked: [0],
  }

  toggleDictionarySelect = (id: any, value: boolean) => () => {
    console.log(id, value)
  }

  toggle(id: any, value: boolean) {
    console.log(id, value)
    this.props.actions[value ? 'select' : 'unselect'](id)
  }

  render() {
    return (
      <div>
        <Typography variant="h6" color="inherit">Dictionary Selector</Typography>
        <List>
          {
            this.props.dictionaries.map((dictionary: any) => {
              const { id, selected, name } = dictionary
              return (
                <ListItem
                  onClick={() => this.toggle(id, !selected)}
                  key={id}
                  dense button
                >
                  <Checkbox
                    checked={selected}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={name} />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    )
  }
}
