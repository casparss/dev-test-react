import * as React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

interface ConfirmDialogProps {
  open?: boolean | undefined,
  message: string,
  title: string,
  onConfirm?: any,
  onClose?: any,
}

export default class ConfirmDialog extends React.Component<ConfirmDialogProps> {
  state = {
    open: this.props.open || false,
  }

  componentWillReceiveProps(newProps: ConfirmDialogProps) {
    this.setState({
      open: newProps.open
    })
  }

  onClose = () => {
    this.setState({ open: false })
    !this.props.onClose || this.props.onClose()
  }

  onConfirm = () => {
    this.setState({ open: false })
    !this.props.onConfirm || this.props.onConfirm()
  }

  render() {
    return (
        <Dialog
          open={this.state.open || false}
          onClose={this.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary">
              Close
            </Button>
            <Button onClick={this.onConfirm} color="secondary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
    )
  }
}
