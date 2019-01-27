import { connect } from 'react-redux';

// changes the radio button value
export function handleChange (event) {
    this.setState({
        value: event
    });
};

export function sendToForm (type, payload, page) {
    // set the value for feelings in redux store
    const action = { type: type, payload: payload };
    this.props.dispatch(action);
    return this.props.history.push(page);
} // end sendToUnderstandingForm