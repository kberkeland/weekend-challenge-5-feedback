import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackReview extends Component {
    render() {
        return (
            <footer>
                <h2>Review your feedback:</h2>
                {JSON.stringify(this.props.reduxStore)}
            </footer>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(FeedbackReview);