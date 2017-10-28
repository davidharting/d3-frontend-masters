import React, { Component } from 'react';
import logo from './assets/d3_logo.png';
import './App.css';
import SelectionAndData from './modules/1_selection_and_data';
import EnterAndAppend from './modules/2_enter_and_append';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D3 Coursework</h1>
        </header>
        <p className="App-intro">
          A place to hack while working through Frontend Masters' D3 class.
        </p>
        <h2>1. Selection and Data</h2>
        <SelectionAndData />
        <h2>2. Enter and Append</h2>
        <EnterAndAppend />
      </div>
    );
  }
}

export default App;
