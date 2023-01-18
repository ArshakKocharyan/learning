import React, { Component } from 'react';
import { Button } from '../../components/Button/Button';

export class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <Button>PLUS</Button>
          <Button>MINUS</Button>
        </div>
        <h2>0</h2>
      </div>
    );
  }
}
