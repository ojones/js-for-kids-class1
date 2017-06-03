import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Step from './components/step.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Algorithms</h2>
        </div>
        <p className="App-intro">
          Follow the algorithm steps for a delicous Peanut Butter &amp; Jelly Sandwich.
        </p>
        <Step />
      </div>
    );
  }
}

export default App;
