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
import Divider from '@material-ui/core/Divider';

class UnderstandingForm extends Component {
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

    // function will set the redux store and send the user to the support page
    sendToSupportForm = () => {
        // create an action for setting the understand value in redux
        const action = { type: 'SET_UNDERSTANDING', payload: Number(this.state.value) };
        this.props.dispatch(action);
        // send the user on to the SupportForm.js page
        this.props.history.push('/support');
    } // end sendToSupportForm

    render() {
        return (
            <div>
                <MainHeader />
                <br />
                <div className="div-class">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">How well did you understand today's material?</FormLabel>
                        <RadioGroup
                            aria-label="Understanding"
                            name="understanding"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" />}
                                label="5 - I've got this!"
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
                                label="1 - I'm totally lost."
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <br />
                    <Button variant="contained" color="primary" onClick={this.sendToSupportForm}>
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

export default connect()(UnderstandingForm);