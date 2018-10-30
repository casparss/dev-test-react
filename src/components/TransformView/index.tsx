import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './TransformView.style.scss'
import DictionarySelector from './DictionarySelector'

interface TransformViewProps {
  data: any
}

export default class TransformView extends React.Component<TransformViewProps> {

  get tableHead() {
    return (
      <thead>
        <tr>
          {
            this.props.data.tableBody.map((row: any, i: number) => (
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
        <Grid item xs={2}>
          <h2>Dictionaries</h2>
          <DictionarySelector />
        </Grid>
        <Grid item xs={10}>
          <h1>Main</h1>
          <table className='Mapping-summary'>
            {this.tableHead}
            <tbody>
              {this.tableBody}
            </tbody>
          </table>
        </Grid>
      </div>
    )
  }
}
