import React, { Component } from 'react';
import logo from './assets/d3_logo.png';
import './App.css';

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
      </div>
    );
  }
}

export default App;
