import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function Transition(props:any) {
  return <Slide direction="up" {...props} />;
}

interface DictionaryEditorProps {
  open?: boolean | undefined,
  closeDictionaryEditor: any
}
interface DictionaryEditorState {
  open: boolean
}

export default class DictionaryEditor extends React.Component<DictionaryEditorProps, DictionaryEditorState> {
  render() {
    return (
      <Dialog
          fullScreen
          open={this.props.open || false}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                onClick={this.props.closeDictionaryEditor}
                color="inherit"
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" >
                Sound
              </Typography>
              <Button
                onClick={this.props.closeDictionaryEditor}
                color="inherit"
              >
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
    )
  }
}
