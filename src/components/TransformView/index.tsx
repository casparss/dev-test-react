import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './TransformView.style.scss'
import DictionarySelector from './DictionarySelector'
import Paper from '@material-ui/core/Paper'

interface TransformViewProps {
  data: any,
  dictionaries: any,
  actions: any
}

export default class TransformView extends React.Component<TransformViewProps> {

  get tableHead() {
    return (
      <thead>
        <tr>
          {
            this.props.data.tableHead.map((row: any, i: number) => (
              <th key={i}>{row.label}</th>
            ))
          }
        </tr>
      </thead>
    )
  }

  get tableBody() {
    const { tableBody, tableHead } = this.props.data
    return tableBody.map((row: any, i: number) => {
      return (
        <tr key={i}>
          {tableHead.map(({name}: {name: string}, i: number) => <td key={i}>{row[name]}</td>)}
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="Container">
        <Grid item xs={3}>
          <Paper className="Side-paper">
            <DictionarySelector
              dictionaries={this.props.dictionaries}
              actions={this.props.actions}
            />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className="Main-table-paper">
            <table className='Mapping-summary'>
              {this.tableHead}
              <tbody>
                {this.tableBody}
              </tbody>
            </table>
          </Paper>
        </Grid>
      </div>
    )
  }
}
