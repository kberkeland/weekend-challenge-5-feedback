import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './../Header/Header.js';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';
import FeelingsForm from './../FeelingsForm/FeelingsForm.js';
import UnderstandingForm from './../UnderstandingForm/UndestandingForm.js';
import SupportForm from './../SupportForm/SupportForm.js';
import CommentsForm from './../CommentsForm/CommentsForm.js';
import SummaryForm from './../SummaryForm/SummaryForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={FeelingsForm} />
            <Route exact path="/understanding" component={UnderstandingForm} />
            <Route exact path="/support" component={SupportForm} />
            <Route exact path="/comments" component={CommentsForm} />
            <Route exact path="/review" component={FeedbackReview} />
            <Route exact path="/summary" component={SummaryForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;