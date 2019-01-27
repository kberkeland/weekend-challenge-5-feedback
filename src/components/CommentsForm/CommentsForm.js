import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';

// material-ul import statements
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    sendToReview = () => {
        const commentsObject = { check: true,
                                 comments: this.state.value };
        const action = { type: 'SET_COMMENTS', payload: commentsObject };
        this.props.dispatch(action);
        this.props.history.push('/review');
    } // end sendToSupportForm

    render() {
        return (
            <div>
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
                <div>
                    <Button variant="contained" color="primary" onClick={this.sendToReview}>
                        Next page
                    </Button>
                </div>
                <FeedbackReview />
            </div>
        )
    }
}

export default connect()(CommentsForm);