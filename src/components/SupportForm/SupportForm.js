import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';
import MainHeader from '../Header/MainHeader.js';

// material-ul import statements
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class SupportForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '5',
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

    // will set the value of support in redux and sent the user to the comments page
    sendToCommentsForm = () => {
        // type of action to perform in redux store and the value to be sent
        const action = { type: 'SET_SUPPORT', payload: Number(this.state.value) };
        this.props.dispatch(action);
        // send the user to CommentsForm.js
        this.props.history.push('/comments');
    } // end sendToSupportForm

    render() {
        return (
            <div>
                <MainHeader />
                <br />
                <div className="div-class">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Did you feel supported by Prime staff today?</FormLabel>
                        <RadioGroup
                            aria-label="Support"
                            name="support"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" />}
                                label="I feel supported! - 5"
                                labelPlacement="start" />
                            <FormControlLabel
                                value="4"
                                control={<Radio color="primary" />}
                                label="4"
                                labelPlacement="start" />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label="3"
                                labelPlacement="start" />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label="2"
                                labelPlacement="start" />
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label="I feel abandoned. - 1"
                                labelPlacement="start" />
                            />
                        </RadioGroup>
                    </FormControl>
                    <br />
                </div>
                <div>
                    <br />
                    <Button variant="contained" color="primary" onClick={this.sendToCommentsForm}>
                        Next page
                    </Button>
                    <br />
                </div>
                <br />
                <FeedbackReview />
            </div>
        )
    }
}

export default connect()(SupportForm);