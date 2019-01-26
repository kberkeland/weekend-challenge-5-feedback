import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackReviewList from './FeedbackReviewList.js';

// material-ul import statements
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class FeedbackReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dense: false,
        }
    }

    render() {
        return (
            <div>
            <Grid container spacing={16}>
                {/* {JSON.stringify(this.props.reduxStore)} */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" >
                        Review your feedback:
                    </Typography>
                    <FeedbackReviewList />
                </Grid>
                </Grid>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(FeedbackReview);