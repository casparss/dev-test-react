import * as React from 'react';
import LogoSvg from './logo.svg';
import './App.scss';

import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

interface AppProps {
  tabs: Array<any>,
  selectedTabIndex: number,
  selectTab(selectedTabIndex: number): void
}

export class Layout extends React.Component<AppProps> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <LogoSvg className="App-logo" />
          <Paper square>
            <Tabs
              value={this.props.selectedTabIndex}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
            >
              {this.tabMenu}
            </Tabs>
          </Paper>
        </header>
        <main>
          {this.tabDisplay}
        </main>
      </div>
    );
  }

  private handleChange = (event: any, selectedTabIndex: number): any => {
    this.props.selectTab(selectedTabIndex)
  }

  get tabDisplay() {
    const DisplayComponent = this.props.tabs[this.props.selectedTabIndex][1]
    return <DisplayComponent />
  }

  get tabMenu() {
    return this.props.tabs.map(([label], i) => <Tab key={i} label={label} />)
  }
}
