import React, { Component } from 'react';
import { Aside } from '../../components/Aside/Aside';
import { Button } from '../../components/Button/Button';

export class Home extends Component {
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
        <div>

          <Aside isOpen={isOpen} />
          <Button
            onClick={this.handleToggleAside}
            className="btn"
            type="button"
          >
            {isOpen ? 'Close Aside' : 'Open Aside'}
          </Button>
        </div>
      </div>
    );
  }
}
