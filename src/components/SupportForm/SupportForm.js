import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ul import statements
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
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

    sendToCommentsForm = () => {
        // set the value for support in redux store
        const action = { type: 'SET_SUPPORT', payload: Number(this.state.value) };
        this.props.dispatch(action);
        this.props.history.push('/comments');
    } // end sendToSupportForm

    render() {
        return (
            <div>
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
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.sendToCommentsForm}>
                        Next page
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect()(SupportForm);