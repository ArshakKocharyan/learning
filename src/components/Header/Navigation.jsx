import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    const activeStyle = {
      color: 'red',
    };
    return (
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="link"
          to="/"
        >
          Home

        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="link"
          to="/counter"
        >
          Counter

        </NavLink>
      </nav>
    );
  }
}
