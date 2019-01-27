import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FeedbackReviewList from './FeedbackReviewList.js';

// material-ul import statements
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class FeedbackReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dense: false,
        }
    }

    // sendToCongrats = () => {
    //     const action = { type: 'RESET' };
    //     this.props.dispatch(action);
    //     this.props.history.push('/congrats');
    // } // end sendToCongratsForm

    sendToCongrats = (event) => {
        // prevent the form from refreshing the DOM
        // event.preventDefault();
        // send all feedback input fields to the database
        let dataToSend = {
            feelings: this.props.reduxStore.feelings,
            understanding: this.props.reduxStore.understanding,
            support: this.props.reduxStore.support,
            comments: this.props.reduxStore.comments.comments         
        };

        // axios POST request to send feedback to the database
        axios({
            method: 'POST',
            url: `/feedback`,
            data: dataToSend
        }).then((response) => {
            // reset the redux store to its initial values
            const action = { type: 'RESET' };
            this.props.dispatch(action);
            // send the user to the CongratsForm page
            this.props.history.push('/congrats');
        }).catch((error) => {
            // console log and error message that the POST failed
            console.log(`Error in axios POST: ${error}`);
            alert(`Error sending feedback to the database.`);
        });
    } // end sendToCongratsForm


    render() {

        let completeDisabled = true;

        if( this.props.reduxStore.feelings !== 0 &&
            this.props.reduxStore.understanding !== 0 &&
            this.props.reduxStore.support !== 0 &&
            this.props.reduxStore.comments.check) {
                completeDisabled = false;
        } // end if

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
                    <div>
                        <Button variant="contained" color="primary" disabled={completeDisabled} onClick={this.sendToCongrats}>
                            Submit Feedback
                        </Button>
                    </div>
                </Grid>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(FeedbackReview);