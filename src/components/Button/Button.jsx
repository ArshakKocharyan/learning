import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const {
      text, size, variant,
      ...rest
    } = this.props;

    return <button {...rest} type="button">CLICK</button>;
  }
}
