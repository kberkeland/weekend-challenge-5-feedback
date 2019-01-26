import React, { Component } from 'react';
import './FeelingsForm.css';
import { connect } from 'react-redux';

// material-ul import statements
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

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

    sendToUnderstandingForm = () => {
        // set the value for feelings in redux store
        const action = { type: 'SET_FEELINGS', payload: this.state.value };
        this.props.dispatch(action);
        this.props.history.push('/understanding');
    } // end sendToUnderstandingForm

    render() {
        return (
            <div>
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
                                label="I'm feeling great! - 5"
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
                                label="I'm very stressed. - 1"
                                labelPlacement="start" />
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.sendToUnderstandingForm}>
                        Next page
                </Button>
                </div>
            </div>
        )
    }
}

export default connect()(FeelingsForm);