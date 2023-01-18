import React, { Component } from 'react';
import styles from './Header.module.scss';
import { Navigation } from './Navigation';

export class Header extends Component {
  render() {
    return (
      <header className={styles.container}>
        <Navigation />
      </header>
    );
  }
}
