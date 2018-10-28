import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './TransformView.style.scss'
import DictionarySelector from './DictionarySelector'

export default class TransformView extends React.Component {
  render() {
    return (
      <div className="Container">
        <Grid item xs={4}>
          <h2>Dictionaries</h2>
          <DictionarySelector />
        </Grid>
        <Grid item xs={8}>
          <h1>Main</h1>
          <table className='Mapping-summary'>
            <thead>
              <tr>
                <th>Fieldname</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>A</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Another</td>
                <td>A</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Else</td>
                <td>A</td>
                <td>B</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </div>
    )
  }
}
