import React, { Component } from 'react';
import { Aside } from './components/Aside/Aside';

export class App extends Component {
  state = {
    isOpen: false,
  };

  handleToggleAside = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Aside isOpen={isOpen} />
        <button
          onClick={this.handleToggleAside}
          className="btn"
          type="button"
        >
          {isOpen ? 'Close Aside' : 'Open Aside'}
        </button>
      </div>
    );
  }
}
