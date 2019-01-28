import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';
import MainHeader from '../Header/MainHeader.js';

// material-ul import statements
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class CommentsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    // changes the radio button value
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        }, () => { this.logState() })
    };

    logState = () => {
        console.log(this.state.value);
    }

    // function will send the user to the review page and set the comment value in redux
    sendToReview = () => {
        // create a variable to send comments
        const commentsObject = { check: true,
                                 comments: this.state.value };
        // set the action and payload for redux
        const action = { type: 'SET_COMMENTS', payload: commentsObject };
        this.props.dispatch(action);
        // send the user to FeedbackReview.js page
        this.props.history.push('/review');
    } // end sendToSupportForm

    render() {
        return (
            <div>
                <MainHeader />
                <br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Comments"
                    multiline
                    rowsMax="4"
                    value={this.state.value}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText="Place to enter any comments you have about your day."
                    variant="outlined"
                    placeholder="enter any comments here"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <br />
                    <Button variant="contained" color="primary" onClick={this.sendToReview}>
                        Next page
                    </Button>
                    <br />
                </div>
                <br />
                <Divider variant="middle" />
                <FeedbackReview />
            </div>
        )
    }
}

export default connect()(CommentsForm);