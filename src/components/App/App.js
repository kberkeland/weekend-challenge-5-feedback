import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './../Header/Header.js';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <FeedbackReview />
      </div>
    );
  }
}

export default App;
