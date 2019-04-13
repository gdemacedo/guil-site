import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Values from './components/Values';
import CenteredTabs from './components/CenteredTabs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimarySearchAppBar/>
        <Values />
        <CenteredTabs />
      </React.Fragment>
    );
  }
}

export default App;
