import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Counter } from './pages/Counter/Counter';
import { Home } from './pages/Home/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
