import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FeelingsForm from './../FeelingsForm/FeelingsForm.js';
import UnderstandingForm from './../UnderstandingForm/UndestandingForm.js';
import SupportForm from './../SupportForm/SupportForm.js';
import CommentsForm from './../CommentsForm/CommentsForm.js';
import CongratsForm from './../CongratsForm/CongratsForm';
import AdminForm from './../AdminForm/AdminForm.js';
import ReviewForm from './../ReviewForm/ReviewForm.js';

// material-ul import statements
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <Paper elevation={1} className="App">
        <Router>
          <div>
            <Route exact path="/" component={FeelingsForm} />
            <Route exact path="/understanding" component={UnderstandingForm} />
            <Route exact path="/support" component={SupportForm} />
            <Route exact path="/comments" component={CommentsForm} />
            <Route exact path="/review" component={ReviewForm} />
            <Route exact path="/congrats" component={CongratsForm} />
            <Route exact path="/admin" component={AdminForm} />
          </div>
        </Router>
      </Paper>
    );
  }
}

export default App;