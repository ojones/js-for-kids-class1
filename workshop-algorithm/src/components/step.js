import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        '1) Grab bread, knife, jelly, and peanut butter',
        '2) Get 2 slices of bread and lay them flat inside out',
        '3) Grab knife, dip it in jelly, and spread over one slice of bread',
        '4) Grab knife once again, dip it in jelly & spread over one slice of bread',
        '5) Put slices together and enjoy'
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
