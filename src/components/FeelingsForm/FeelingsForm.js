import React, { Component } from 'react';
import './FeelingsForm.css';
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
import Divider from '@material-ui/core/Divider';

class FeelingsForm extends Component {
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

    // function setting feelings in redux and sending the user to the understanding page
    sendToUnderstandingForm = () => {
        // set the action type and value for redux store
        const action = { type: 'SET_FEELINGS', payload: Number(this.state.value) };
        this.props.dispatch(action);
        // push the user to the next page - UnderstandingForm.js
        this.props.history.push('/understanding');
    } // end sendToUnderstandingForm


    render() {
        return (
            <div>
                <MainHeader />
                <br />
                <div className="div-class">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">How are you feeling today?</FormLabel>
                        <RadioGroup
                            aria-label="Feelings"
                            name="feelings"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" />}
                                label="5 - I'm feeling great!"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio color="primary" />}
                                label="4"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label="3"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label="2"
                            />
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label="1 - I'm very stressed."
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <br />
                    <Button variant="contained" color="primary" onClick={this.sendToUnderstandingForm}>
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

export default connect()(FeelingsForm);