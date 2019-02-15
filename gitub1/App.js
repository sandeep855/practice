import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './top';

class App extends Component {
  render() {
    return (
      <Top message="this is props message"></Top>
    );
  }
}

export default App;
