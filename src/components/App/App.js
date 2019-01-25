import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './../Header/Header.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
      </div>
    );
  }
}

export default App;
